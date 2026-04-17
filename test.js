const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const el = dom.window.document.querySelector("p");
try {
  JSON.stringify({ el: el });
  console.log("No error");
} catch(e) {
  console.error("Error:", e.message);
}
