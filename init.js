const path = require("path");
const fs = require("fs-extra");

async function init() {
  await fs.ensureDir(path.join(__dirname, "temp"));
  await fs.ensureDir(path.join(__dirname, "upload"));

  const pathConfig = path.join(__dirname, "config.json");
  const pathBuildScript = path.join(__dirname, "build.sh");
  if (!fs.existsSync(pathConfig)) {
    await fs.copyFile(path.join(__dirname, "template/config.json"), pathConfig);
  }
  if (!fs.existsSync(pathBuildScript)) {
    await fs.copyFile(
      path.join(__dirname, "template/build.sh"),
      pathBuildScript
    );
  }
}

init().then(() => {
  console.log("初始化完毕");
});
