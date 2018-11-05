const ejs = require("ejs");
const fs = require("fs");

const template = fs.readFileSync(`${__dirname}/views/index.ejs`, "utf-8");
const sounds = fs.readdirSync(`${__dirname}/sounds/`);

const html = ejs.render(template, {
  sounds
});

console.log(html)

fs.writeFileSync(`${__dirname}/index.html`, html)
