import re, json, os

SRC = "kidstown_cgi-main/data/citypark"
pages = {}

link_pattern = re.compile(
    r'<A\s+HREF="#ktini\{engine\}#\?KEY=(\d+)(?:&(?:amp;)?([^"]*?))?">\s*(.*?)\s*</A>',
    re.IGNORECASE | re.DOTALL
)

for fname in sorted(os.listdir(SRC), key=lambda x: int(x.replace("page",""))):
    with open(os.path.join(SRC, fname), encoding="latin-1") as f:
        raw = f.read()

    choices = []

    def replace_link(m):
        key, params, text = m.group(1), m.group(2), m.group(3)
        text_clean = re.sub(r'\s+', ' ', text).strip()
        if key == "1000":
            choices.append({"label": text_clean, "target": "home"})
        elif key == "2000":
            choices.append({"label": text_clean, "target": "intro"})
        else:
            pm = re.search(r'page=(#from#|#page#|\d+)', params or "")
            target_raw = pm.group(1) if pm else None
            if target_raw == "#from#":
                target = "back"
            elif target_raw and target_raw.isdigit():
                target = int(target_raw)
            else:
                target = None
            choices.append({"label": text_clean, "target": target})
        return ""  # strip the raw link out of body text; choices render separately

    body = link_pattern.sub(replace_link, raw)

    # normalize whitespace, drop stray <P>/<HR> clutter at trim points, keep inline tags
    body = re.sub(r'\n{3,}', '\n\n', body).strip()

    # token substitutions -> JS template tokens
    body = body.replace("#name#", "{{name}}")
    body = body.replace("#xname#", "{{name}}")
    body = body.replace("#ktini{cityparkgraphics}#", "../../../graphics/citypark")
    body = body.replace("#ktini{engine}#", "")  # any leftover refs

    page_id = int(fname.replace("page", ""))
    pages[page_id] = {"id": page_id, "text": body, "choices": choices}

with open("convert/citypark.json", "w", encoding="utf-8") as f:
    json.dump([pages[k] for k in sorted(pages)], f, indent=2)

print(f"Parsed {len(pages)} pages")
print(json.dumps(pages[1], indent=2))
print("---")
print(json.dumps(pages[9], indent=2))