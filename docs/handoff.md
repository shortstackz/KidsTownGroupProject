# Handoff Notes

## One thing left to fix before this is actually done

**Zoo is built but not reachable.** `src/modules/zoo/` has all 6 pages
(`index.html`, `africa.html`, `australia.html`, `ocean.html`, `polar.html`,
`world.html`) and is the most complete module in the repo — but
`homepage.html`'s `MODULE_PATHS` has its entry commented out:
```js
//zoo: "src/modules/zoo/index.html",
```
Anyone clicking Zoo on the map or nav bar gets the "isn't built yet" toast
instead of the actual, finished module. Removing the `//` is the entire fix.

**About is missing entirely.** The assignment's grading notes call for an
About section with a direct GitHub Pages link to the current entry point
(`https://shortstackz.github.io/KidsTownGroupProject/`). There's no
`about` module, no about page, and the `about` key in `MODULE_PATHS` is
commented out with nothing behind it. This needs to be built, not just
wired up.

## What's confirmed working

- **Entry point** — `index.html` (splash) + `homepage.html` (map/nav), both
  at the repo root as GitHub Pages requires. The site loads.
- **Museum** — `index.html` + `museum.js` + `museum.json`, correct image
  paths, correctly linked. No known issues.
- **City Park** — `index.html` + `c_park.js` + `citypark.json`, correctly
  linked and internally consistent. This took three separate fixes across
  earlier handoff rounds (see `docs/architecture.md` for the full history);
  worth reading if anything here regresses, since it's broken this way
  before. Verified with a headless test that actually loads the page,
  submits the name form, clicks a story choice, and clicks Back.
- **School, City Hall, Library** — built and working, correctly linked.

## What's not started

- Township (52 original files — the largest remaining zone)
- Toy Store
- About (see above — this one's a grading requirement, not just a "nice to
  have")
- The shared router (`src/core/router.js`) — every module is still a
  standalone page reached by a full page load, not client-side routing.
  `homepage.html`'s `MODULE_PATHS` object is the stand-in for it.

## Known, unresolved issue with the legacy reference

`original/` should be the untouched, complete copy of the 1998 site, but
it isn't:
- `original/cgi-bin/` is missing `kt.cgi` — the actual dispatcher script.
- `original/data/` is missing `ss1.dat` and City Park's page1 and page10.
- `original/scripts/` shows signs of files being lost when multiple zones'
  same-named scripts got merged into one flat folder.

Whoever picks this up next should not assume `original/` has everything —
cross-check against the top-level `scripts/`/`data/` folders, which are
more complete.

## Also worth doing, not urgent

- `tools/citypark.py` and `tools/museum.py` both hardcode a source path
  (`kidstown_cgi-main/data/...`) that doesn't exist in this repo. The real
  City Park data is also one level deeper than the script expects
  (`data/citypark/citypark/page1`, not `data/citypark/page1`). Fix the
  path before re-running either script.
- `css/app.css` exists but isn't linked from any page yet — link it or
  remove it.
- Replace `docs/README.md` and `docs/architecture.md` with the versions
  delivered alongside this file — the ones currently in the repo predate
  the Zoo and About findings above.
