# KidsTownGroupProject

This project is the conversion of the original KidsTown website from a 1998 server-based CGI/Perl application into a modern, browser-based JavaScript site.
KidsTown was originally created by students at the University of Colorado at Denver with the Tattered Cover Book Store, as part of a children's literacy project.
The original, unmodified source is preserved in original/ and used as the reference spec for this rewrite — nothing in that folder is part of the live build.

Live Pages: https://github.com/shortstackz/KidsTownGroupProject/deployments/github-pages


# Group 6 Collaborators:

- Kalia Chongtoua
- Tommy Lenot
- Suraj Shrestha
- ChatGPT


# Phase 1 — Auditing (in progress)
- [ ] Audit `home` — inventory scripts/data, note behavior in docs/MODULE_INVENTORY.md
- [ ] Audit `toystore`
- [ ] Audit `school`
- [ ] Audit `township` (largest — 52 files)
- [ ] Audit `museum`
- [ ] Audit `cityhall`
- [x] Audit `citypark` — done as part of building the working example
- [ ] Audit `zoo`
- [ ] Audit `library`
- [ ] Read cgi-bin/kt.cgi and kt.db, write up routing in docs/ROUTING_MAP.md
- [ ] Read cgi-bin/kt.ini, note config values each module depends on

# Phase 2 — Core Engine (not started)

- [ ] Design the client-side router replacing KEY= dispatch
- [ ] Build src/core/router.js
- [ ] Build shared page shell (header/nav/footer)
- [ ] Decide data-loading pattern for module JSON
- [ ] Decide framework/no-framework and build tooling
- [ ] Wire root index.html to launch modules through the router
- [ ] Establish convention for cross-module navigation (home, module-to-module)
      
 # Phase 3 — Module Conversion (not started)

- [ ] `home`
- [ ] `toystore`
- [ ] `school`
- [ ] `township` (biggest — consider sub-issues per section)
- [ ] `museum`
- [ ] `cityhall`
- [ ] `zoo`
- [ ] `library`
- [x] `citypark` — done, needs router hookup once Phase 1 lands

### Per-module checklist (repeat for each)

- [ ] Write tools/parse_<module>.py
- [ ] Convert original/data/<module>/ → src/modules/<module>/*.json
- [ ] Copy graphics: original/graphics/<module>/ → graphics/<module>/
- [ ] Build src/modules/<module>/index.html
- [ ] Test standalone with Live Server
- [ ] Wire into shared router/shell

# Phase 3 — Integration & QA (not started)

- [ ] Confirm every module reachable from home page town map
- [ ] Full regression pass vs. original/, module by module
- [ ] Cross-browser check (Chrome + Firefox minimum)
- [ ] Mobile/responsive pass
- [ ] Accessibility pass (alt text, keyboard nav, contrast)
- [ ] Broken-link sweep (leftover cgi-bin/.pl references)
- [ ] Update README status table as items clear
- [ ] Final team walkthrough before calling it completede opportunity, not just parity
