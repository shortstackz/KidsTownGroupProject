# KidsTownGroupProject

This project is the conversion of the original KidsTown website from a 1998 server-based CGI/Perl application into a modern, browser-based JavaScript site.
KidsTown was originally created by students at the University of Colorado at Denver with the Tattered Cover Book Store, as part of a children's literacy project.
The original, unmodified source is preserved in original/ and used as the reference spec for this rewrite — nothing in that folder is part of the live build.

Live Page: https://shortstackz.github.io/KidsTownGroupProject/

**New to this repo?** Read `docs/handoff.md` first — it has what's
confirmed working, what's broken, and what's not started, in more
detail than the checklists below.


# Group 6 Collaborators:

- Kalia Chongtoua
- Tommy Lenot
- Suraj Shrestha
- ChatGPT


# Phase 1 — Auditing (in progress)
- [x] Audit `home` — splash page
- [ ] Audit `toystore`
- [x] Audit `school`
- [ ] Audit `township` (largest — 52 files)
- [x] Audit `museum`
- [x] Audit `cityhall`
- [x] Audit `citypark` — done as part of building the working example
- [x] Audit `zoo` — 6 pages built (`index.html`, `africa.html`, `australia.html`, `ocean.html`, `polar.html`, `world.html`), the most complete module in the repo. Not currently reachable from the site — see "About + Zoo linking" below.
- [x] Audit `library`
- [x] Read cgi-bin/kt.db and kt.ini, write up routing in docs/ROUTING_MAP.md — both files exist in `original/cgi-bin/`, just named `kt (1).db` / `kt (1).ini` (stray `(1)` from a duplicate upload — worth renaming to `kt.db`/`kt.ini`). `kt.cgi` itself is genuinely missing from `original/` and can't be recovered from what's in the repo.
- [ ] Read cgi-bin/kt.ini, note config values each module depends on

# Phase 2 — Core Engine (not started)

- [ ] Design the client-side router replacing KEY= dispatch
- [ ] Build src/core/router.js
- [ ] Build shared page shell (header/nav/footer)
- [ ] Decide data-loading pattern for module JSON
- [ ] Decide framework/no-framework and build tooling
- [ ] Wire root index.html to launch modules through the router
- [ ] Establish convention for cross-module navigation (home, module-to-module)
      
 # Phase 3 — Module Conversion (in progress)

- [x] `home`
- [ ] `toystore`
- [x] `school`
- [ ] `township` (biggest — consider sub-issues per section)
- [x] `museum`
- [x] `cityhall`
- [x] `zoo` — built, all 6 pages. Not yet linked: `homepage.html`'s `MODULE_PATHS` has its entry commented out (`//zoo: "src/modules/zoo/index.html",`), so it's unreachable from the map/nav until that line is uncommented.
- [x] `library`
- [x] `citypark` — done and fully working (`index.html` → `c_park.js` → `citypark.json`, all verified consistent). No longer blocked on anything; will get the router hookup like every other module once Phase 2 lands.
- [ ] `about` — **not started.** Required by the assignment's grading notes: an About section with a direct GitHub Pages link to the live entry point (`https://shortstackz.github.io/KidsTownGroupProject/`). No module, page, or content exists for this yet — it needs to be built, not just linked.

### Per-module checklist (repeat for each)

- [x] Write tools/parse_<module>.py
- [x] Convert original/data/<module>/ → src/modules/<module>/*.json
- [x] Copy graphics: original/graphics/<module>/ → graphics/<module>/
- [x] Build src/modules/<module>/index.html
- [x] Test standalone with Live Server
- [ ] Wire into shared router/shell

# Phase 4 — Integration & QA (not started)

- [ ] Confirm every module reachable from home page town map — currently **Zoo is not** (see Phase 3 note above)
- [ ] Full regression pass vs. original/, module by module
- [ ] Cross-browser check (Chrome + Firefox minimum)
- [ ] Mobile/responsive pass
- [ ] Accessibility pass (alt text, keyboard nav, contrast)
- [ ] Broken-link sweep (leftover cgi-bin/.pl references)
- [ ] Update README status table as items clear
- [ ] Final team walkthrough before calling it complete
- [ ] Treat this as a learning opportunity, not just parity with the original