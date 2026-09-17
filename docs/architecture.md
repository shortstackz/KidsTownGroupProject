# KidsTown: CGI/Perl → SPA Architecture Mapping

This document maps every concept in the original 1998 CGI/Perl
implementation to its equivalent in the new browser-based JavaScript
single-page application (SPA), so the conversion can continue
incrementally with a clear reference for "what does the old X become?"

## Status

| Area | Original KEY(s) | Status | Perl reference | JS implementation |
|---|---|---|---|---|
| Visitor splash | (static `index.html`) | ✅ Ported | `index-cgi-original.html` | `js/pages/home.js` → `splash()` |
| Home / map | 1000 | ✅ Ported | `scripts/home/{mainPgHdr,ktmap,mainPgTxt,mainPgFtr}.pl` | `js/pages/home.js` |
| Help | 1010 | ✅ Ported | `scripts/home/{helphdr,helptxt}.pl` | `js/pages/help.js` |
| About | 1100 | ✅ Ported | `scripts/home/about.pl` | `js/pages/about.js` |
| Participants | 1200 | ✅ Ported | `scripts/home/participants.pl` | `js/pages/participants.js` |
| Nav bar (shared) | (every page) | ✅ Ported | `scripts/home/navbar.pl` | `js/components/navbar.js` |
| City Park | 2000, 2010 | ✅ Ported (full branching story) | `scripts/citypark/{main,page}.pl`, `data/citypark/page1-18` | `js/pages/citypark.js`, `js/data/citypark-story.js` |
| TownShip | 3000+ | 🚧 Stub | `scripts/township/*.pl` | `js/pages/stub.js` |
| School | 4000+ | 🚧 Stub | `scripts/school/*.pl` | `js/pages/stub.js` |
| City Hall | 5000+ | 🚧 Stub | `scripts/cityhall/*.pl` | `js/pages/stub.js` |
| Library | 6000+ | 🚧 Stub | `scripts/library/*.pl` | `js/pages/stub.js` |
| Toy Store | 7000+ | 🚧 Stub | `scripts/toystore/*.pl` | `js/pages/stub.js` |
| Museum | 8000+ | 🚧 Stub | `scripts/museum/*.pl` | `js/pages/stub.js` |
| Zoo | 9000+ | 🚧 Stub | `scripts/zoo/*.pl` | `js/pages/stub.js` |
| Bookmark redirect (KEY=101) | 101 | ❌ Not needed | `scripts/home/passer.pl` | n/a — see note below |

"🚧 Stub" pages still render (with the nav bar and image map fully
linking to them) so nothing in the map or nav bar is ever a dead link —
they just say "coming soon" and point back at the relevant `scripts/<zone>/*.pl`
files as the porting reference. That satisfies the incremental-growth
goal: the entry experience (map + nav + images) is complete first, and
each zone's real content can be ported behind its existing link without
ever touching the entry point again.

## Concept-by-concept mapping

### 1. The dispatcher: `kt.cgi` → `js/router.js`

The original `cgi-bin/kt.cgi` was a single Perl script that:

1. Read `QUERY_STRING` (GET) or `STDIN` (POST) — `MergeGetPost()`.
2. Split `KEY=1000&name=Sam` into a hash (`%ktvars`) — `String2hash()`.
3. Looked up every line in `kt.db` whose key matched `#KEY#`.
4. For each matching line, resolved a `.pl` file path (via `kt.ini`
   directory aliases) and `eval`'d it, letting it `print` HTML.
5. Concatenated everything printed into one `<HTML>...</HTML>` response.
6. If the `KEY` wasn't found in `kt.db`, fell back to `KEY=1000`.

`js/router.js` does the exact same five steps, client-side, on every
`hashchange` event instead of on every HTTP request:

| Step | Perl (`kt.cgi`) | JavaScript (`router.js`) |
|---|---|---|
| Read request | `MergeGetPost()` | `location.hash` |
| Parse params | `String2hash()` | `parseHash()` |
| Look up handlers | grep lines from `kt.db` | `siteDb[KEY]` (`site-db.js`) |
| Run handlers | `EvalFile()` (`eval` on file text) | Call each function directly |
| Fallback | `KEY = "#1000#"` | `siteDb[DEFAULT_KEY]` |
| Emit output | `print` to STDOUT | `appEl.innerHTML = ...` |

### 2. The routing table: `kt.db` → `js/site-db.js`

`kt.db` was a flat text file where every line was
`#KEY#script/path.pl optional=args`, and a single `KEY` could map to
*several* lines (header script, then content script, then nav bar
script, etc.), all run in order and concatenated.

`js/site-db.js` is that same table, expressed as a JS object whose keys
are the `KEY` values and whose values are **ordered arrays of render
functions** — one array entry per line `kt.db` used to have for that
`KEY`. For example, the original:

```
#1000#homescripts/mainPgHdr.pl
#1000#homescripts/ktmap.pl
#1000#homescripts/mainPgTxt.pl
#1000#homescripts/navbar.pl HelpState=1010
#1000#homescripts/mainPgFtr.pl
```

becomes:

```js
1000: [home.header, home.map, home.text, (v) => navbar(v, { HelpState: 1010 }), home.footer],
```

Extra args like `HelpState=1010` (originally appended after the script
path and re-parsed by `String2hash`) become ordinary function arguments.

### 3. Directory/URL configuration: `kt.ini` → `js/config.js`

`kt.ini` told every Perl script where graphics, scripts, and data lived
on the server's filesystem, plus a few external URLs. Since the SPA has
no filesystem to resolve and no per-zone script directories to `eval`,
`js/config.js` keeps only what's still meaningful: relative graphics
paths (served as static files) and the external links (Tattered Cover,
CU Denver, etc.). It also adds a `github` section with no CGI
equivalent — the live Pages URL and repo URL, used on the About page.

### 4. Per-page scripts (`scripts/<zone>/*.pl`) → `js/pages/*.js`

Every Perl script that used to `print` an HTML fragment is now a JS
function that `return`s an HTML string. Server-side templating
(`$ktini{...}`, `$ktvars{...}` interpolated into heredocs) becomes
ordinary JavaScript template literals reading from `config` and the
parsed hash `vars`.

### 5. Per-zone content data (`data/<zone>/*`) → `js/data/*.js`

The City Park story (`data/citypark/page1`..`page18`) used
`#placeholder#` tokens (`#name#`, `#xname#`, `#page#`, `#from#`,
`#ktini{engine}#`, `#ktini{cityparkgraphics}#`) that
`scripts/citypark/page.pl` filled in with regex substitution at request
time. `js/data/citypark-story.js` keeps the same 18 pages and the same
branching structure, but each page is a small function that receives
the current `vars` directly and interpolates them with template
literals — no substitution pass needed, because the "template" and the
"values" are just JS in the same scope.

### 6. State / continuity: query string → hash fragment

The CGI version passed state (`name`, `page`, `from`) forward on every
link as GET query-string parameters, because each click was a fresh,
stateless HTTP request. The SPA keeps exactly the same model — state
still travels as `key=value` pairs on every link — just relocated from
`?query` (sent to a server) to `#hash` (read by `router.js` in the
browser). This is why City Park links still look almost identical to
the originals:

```
Perl:  href="#ktini{engine}#?KEY=2010&page=3&name=#xname#&from=2"
JS:    href="#KEY=2010&page=3&name=Sam&from=2"
```

### 7. The image map

`scripts/home/ktmap.pl` printed an `<IMG USEMAP>` with eight `<AREA
SHAPE="POLY" COORDS="...">` regions pointing at `kt.cgi?KEY=NNNN`.
`js/pages/home.js` reproduces the same `hometown.gif`, the same eight
polygons with **identical COORDS values**, and the same destinations —
only the `href` targets changed, from `kt.cgi?KEY=NNNN` to `#KEY=NNNN`.

### 8. Things that don't carry over

- **`passer.pl` (KEY=101/102)** existed to let old bookmarks pointing
  at a stale `index.html` get redirected back through `kt.cgi`. There's
  only one HTML entry point now (`index.html`, loading `js/app.js`), so
  this indirection has no SPA equivalent and was intentionally dropped.
- **`kt.db`'s per-request `eval`** of Perl source is inherently a
  server-side, dynamic-code-loading pattern. Its closest SPA analogue
  is simply having all page modules statically imported up front in
  `site-db.js` — there's no need (or safe way) to `eval` arbitrary code
  in the browser for this.
- **`cgi-bin/kt.db`'s SQL-like flat-file lookup** (`grep` for a key
  prefix) is replaced by a plain JS object property lookup, which is
  the natural equivalent of an in-memory key/value table.

## Working with the legacy Perl

`cgi-bin/`, `scripts/`, and `data/` (the original CGI/Perl
implementation) are kept in this repository purely as the **reference
model** for zones that haven't been ported yet — nothing here executes
them; GitHub Pages only serves static files, so the `.pl`/`.cgi` files
are inert. When you're ready to port the next zone:

1. Read the corresponding `scripts/<zone>/*.pl` files and the `kt.db`
   lines for that `KEY` range — that's your spec.
2. Add a new module under `js/pages/`.
3. Replace that zone's `stub(...)` entry in `js/site-db.js` with your
   new render function(s), following the same "array of functions per
   KEY" pattern City Park and Home already use.
4. If the zone has data files (like City Park's `data/citypark/page*`),
   convert them into a `js/data/<zone>-*.js` module the same way
   `citypark-story.js` did.

If you'd rather keep the legacy Perl tree out of your main branch
entirely (so `main` only ever contains the live static site), move
`cgi-bin/`, `scripts/`, and `data/` to a dedicated branch (e.g.
`legacy-cgi`) in your actual GitHub repository and keep `main` /
whichever branch GitHub Pages builds from limited to `index.html`,
`css/`, `js/`, and `graphics/`. That's a repository operation to
perform on your end (git branch management isn't something this
generated tree does for you), but the file layout here is already
split cleanly enough (`cgi-bin/`, `scripts/`, `data/` vs. `index.html`,
`css/`, `js/`, `graphics/`) to make that split a straightforward `git
mv` + branch push.
