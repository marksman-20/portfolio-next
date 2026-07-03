const fs = require("fs");
const files = [
  "src/app/page.js",
  "src/app/blog/csr-esg/page.js",
  "src/app/blog/sustainable-finance/page.js"
];
for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/([\"\'])\/images\//g, "$1/portfolio-next/images/");
  content = content.replace(/([\"\'])\/assets\//g, "$1/portfolio-next/assets/");
  fs.writeFileSync(file, content);
}
