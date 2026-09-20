# KidsTown Architecture

How the original 1998 CGI/Perl site maps to this JavaScript conversion, and
what's actually true in the repo right now (verified directly against the
files, not assumed).

## The original site, in short

- `kt.cgi` was the single entry point. Every link/button on the site was a
  query string like `?KEY=2000`.
- `kt.db` was a lookup table: KEY → an ordered list of Perl scripts to run.
  Their combined output was the page.
- `kt.ini` held path/config aliases the scripts used.
- Each "zone" (City Park, Museum, School, ...) had its own `scripts/<zone>/*.pl`
  and `data/<zone>/*` flat-file data.
- Navigation state (like "where did I come from, for the Back button") was
  passed as a `#from#`-style query parameter on every link.

## This conversion, in short

- No server, no `kt.cgi`. Static HTML/CSS/JS, served from GitHub Pages.
- `index.html` (repo root) is the splash/visitor-center page. It links to
  `homepage.html` (also repo root), which has the real KidsTown image map
  and nav bar.
- `homepage.html` contains a `MODULE_PATHS` object — this is the current,
  temporary stand-in for `kt.db`. It maps a module key (`citypark`,
  `museum`, ...) to the HTML file that module lives at. There's no shared
  router yet (`src/core/router.js` doesn't exist) — each module is its own
  full page load.
- Each finished zone lives at `src/modules/<zone>/`, and generally follows
  one of two patterns:
  - **External data** (`.js` fetches a `.json`): Museum, School, City Park.
    This is the preferred pattern — content and behavior are separate, so a
    typo or a story change doesn't mean re-reading code.
  - **Inline data** (`.js` has the content baked into it, or the old
    `.html` still has an inline `<script>` with the data in it): City Hall,
    Library, Zoo. Works, but harder to hand-edit or audit.
- Per-page navigation history (the original's `#from#` trick) is
  reimplemented in City Park as a real in-memory array (`history = []` in
  `c_park.js`), popped on Back.

## Module status (verified against the actual repo contents)

| Zone | Status | Notes |
|---|---|---|
| Home (splash + map) | ✅ Working | `index.html` + `homepage.html`, both at repo root as GitHub Pages requires |
| Museum | ✅ Working | `index.html` + `museum.js` + `museum.json`, correctly linked |
| City Park | ✅ Working | `index.html` + `c_park.js` + `citypark.json`, correctly linked — see "City Park, in detail" below for what it took to get here |
| School | 🚧 Built | `index.html` + `school.js` + `school.json`, correctly linked |
| City Hall | 🚧 Built | `cityhall_index.html` + `cityhall.js` (inline data), correctly linked |
| Library | 🚧 Built | `index.html` + `library.js` (inline data), correctly linked |
| Zoo | 🚧 Built, **but unreachable from the site** | 6 pages (`index.html`, `africa.html`, `australia.html`, `ocean.html`, `polar.html`, `world.html`) — the most complete module in the repo — but its entry in `homepage.html`'s `MODULE_PATHS` is commented out (`//zoo: ...`), so clicking Zoo on the map or nav bar just shows the "isn't built yet" toast. See "Most urgent fix" below. |
| Township | ⬜ Not started | Largest zone in the original (~52 files, mostly shared country-matching mini-games) |
| Toy Store | ⬜ Not started | |
| Help | ⬜ Not started | |
| About | ⬜ Not started | **The assignment's grading notes require an About section with a direct GitHub Pages link to the SPA entry point. No `about` module or page currently exists**, and its `MODULE_PATHS` entry is commented out. This is a real content gap, not just a wiring bug. |

## Most urgent fix: Zoo is done but not linked

In `homepage.html`, inside `MODULE_PATHS`:
```js
//zoo: "src/modules/zoo/index.html",
```
That line is commented out, so the key `zoo` doesn't exist on the object at
all. Clicking the Zoo area on the map or the Zoo button in the nav bar calls
`goToModule("zoo")`, finds nothing in `MODULE_PATHS`, and falls through to
the "Zoo isn't built yet — check back soon!" toast — even though Zoo is
actually the most complete module in the repo. Un-commenting that one line
is the fix.

## City Park, in detail

City Park is the one module that went through several rounds of breakage
before landing in its current, verified-working state. Documenting the
history here so nobody "fixes" it back into a broken state:

1. Original bug: `tools/citypark.py`'s link-stripping regex replaced
   inline `<A HREF>` links with an empty string instead of the link's
   text, corrupting sentences ("Let's ." instead of "Let's continue.",
   "or ?" instead of "Willow Street or Cherry Street?").
2. A rewrite (`c_park.js`) was added that expected a different JSON shape
   (`{intro: {...}, pages: {"1": {...}, ...}}`) than what `citypark.json`
   actually contained at the time (a flat array), and `index.html` wasn't
   even loading `c_park.js` — it still ran its own old inline script.
3. Both of those are now fixed. `index.html` loads `c_park.js`;
   `citypark.json` matches the shape `c_park.js` expects, rebuilt directly
   from `data/citypark/page1`–`page18` with the link-stripping bug gone.
4. `homepage.html`'s `MODULE_PATHS.citypark` was still pointing at the old
   filename (`cpark_index.html`) after the module's `index.html` was
   renamed — that's fixed too, it now points at `src/modules/citypark/index.html`.

Verified end-to-end (not just read): a headless test loads the real
`index.html` + `c_park.js` + `citypark.json` together, submits the name
form, clicks a story choice, and clicks Back — all work, no errors.

## Known gaps (not fixable from what's in the repo)

- `original/` is meant to be the untouched 1998 site for reference, but
  it's missing `original/cgi-bin/kt.cgi` (the actual dispatcher) and
  `original/data/ss1.dat`, and `original/data/` doesn't have City Park's
  page1 or page10. The top-level `scripts/`/`data/` folders (organized
  per-zone) are more complete than `original/` — don't delete them as
  "duplicates."
- `tools/citypark.py` and `tools/museum.py` both hardcode
  `SRC = "kidstown_cgi-main/data/<zone>"`, a path that doesn't exist in
  this repo. If either script needs to be re-run (e.g. after recovering
  missing original data), fix that path first — for City Park, note the
  real data also sits one level deeper than expected
  (`data/citypark/citypark/page1`, not `data/citypark/page1`).
- `css/app.css` exists in the repo but isn't linked from any HTML page yet.

## Not yet done

- No shared router (`src/core/router.js`) — `MODULE_PATHS` in
  `homepage.html` is a stand-in, not the real thing.
- Township and Toy Store haven't been started.
- No About page/section with the GitHub Pages link the assignment asks for.
