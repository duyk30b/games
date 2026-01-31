import * as fs from "fs";

const time = new Date().toISOString();
console.log("🚀 ~ Write config with: time =", time);

fs.writeFileSync(
  "./scripts/config.js",
  `const CONFIG = {
  version: "${time}",
}
`,
);
