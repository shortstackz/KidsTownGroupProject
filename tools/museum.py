import re, json, os

SRC = "kidstown_cgi-main/data/museum"

def parse_tour(fname):
    with open(os.path.join(SRC, fname), encoding="latin-1") as f:
        lines = [l.rstrip("\n") for l in f]

    # Skip header/environment block; records start after the first lone "."
    records = []
    current = None
    pending_answer = None
    in_records = False

    for line in lines:
        stripped = line.strip()
        if not in_records:
            if stripped == ".":
                in_records = True
            continue

        if stripped == ".":
            if current:
                records.append(current)
            current = None
            pending_answer = None
            continue

        if stripped.startswith("QUESTION"):
            current = {"question": stripped.split("\t", 1)[1].strip(), "answers": []}
        elif stripped.startswith("CORRECT_ANS"):
            pending_answer = {"text": stripped.split("\t", 1)[1].strip(), "correct": True, "image": None}
            current["answers"].append(pending_answer)
        elif stripped.startswith("INCORRECT_ANS"):
            pending_answer = {"text": stripped.split("\t", 1)[1].strip(), "correct": False, "image": None}
            current["answers"].append(pending_answer)
        elif re.match(r"IMG\d", stripped):
            if pending_answer is not None:
                pending_answer["image"] = "../../../graphics/museum/" + stripped.split("\t", 1)[1].strip()

    if current:
        records.append(current)

    return records

data = {
    "basic": parse_tour("ss1.dat"),
    "advanced": parse_tour("ss2.dat"),
}

with open("convert/museum.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("basic questions:", len(data["basic"]))
print("advanced questions:", len(data["advanced"]))
print(json.dumps(data["basic"][0], indent=2))