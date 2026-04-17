const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf-8');
const scriptStart = content.lastIndexOf('<script', content.lastIndexOf('</script>') - 100);
const scriptCode = content.substring(scriptStart, content.lastIndexOf('</script>') + 9);

try {
    const vm = require('vm');
    const script = new vm.Script(scriptCode.replace(/<script.*?>|<\/script>/g, ''));
    console.log("Syntax is OK");
} catch (e) {
    console.error("Syntax error:", e);
}
