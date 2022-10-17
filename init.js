const path = require("path");
const fs = require("fs-extra");

async function init() {
  await fs.ensureDir(path.join(__dirname, "temp"));
  await fs.ensureDir(path.join(__dirname, "upload"));

  const pathConfig = path.join(__dirname, "config.json");
  if (!fs.existsSync(pathConfig)) {
    await fs.copyFile(path.join(__dirname, "template/config.json"), pathConfig);
  }
}

init().then(() => {
  console.log("初始化完毕");
});
