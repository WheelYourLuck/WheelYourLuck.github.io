const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf-8');
const searchStr = 'function startTournament() {';
const startIndex = content.indexOf(searchStr);
if (startIndex !== -1) {
    const snippet = content.substring(startIndex, startIndex + 1000);
    console.log(snippet);
} else {
    console.log('Not found');
}
