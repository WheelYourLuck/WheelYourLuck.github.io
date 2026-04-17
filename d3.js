const fs = require('fs');
const d3_content = fs.readFileSync('https://d3js.org/d3.v3.min.js', 'utf8');
// wait, we can't easily run it this way without window.
