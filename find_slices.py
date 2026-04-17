import re
with open('index.html', 'r', encoding='utf-8') as f: text = f.read()

pattern = r'function updateWheelData.*?\}'
match = re.search(pattern, text, re.DOTALL)
if match: print(match.group(0))
