import json

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('function startTournament() {')
end_idx = text.find('function exitTournament() {')

if start_idx != -1 and end_idx != -1:
    new_func = """function startTournament() {
        let pool = [];
        try {
            pool = window.getWheelSlices ? window.getWheelSlices() : slices;
        } catch(e) {
            pool = slices;
        }
        
        if(!pool || pool.length < 8) {
            alert("Need at least 8 items on the wheel for a tournament!");
            return;
        }
        
        let poolData = pool.map(s => ({ text: s.text, color: s.color }));
        localStorage.setItem('tournamentPool', JSON.stringify(poolData));
        window.open('tournament.html', '_blank');
    }

function exitTournament() {"""
    text = text[:start_idx] + new_func + text[end_idx + len('function exitTournament() {'):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Patched index.html successfully.")
else:
    print("Failed to find boundaries.")
