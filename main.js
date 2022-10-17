const path = require("path");
const fs = require("fs-extra");
const { execShellScriptContent } = require("@yuri2/exec-shell");

async function main() {
  const config = getConfig();
  // 删除`temp/.git`;
  // await fs.remove(getPath("temp/.git"));
  // 拷贝`upload/www.html.com/.git`至`temp/.git`
  // await fs.copy(
  //   getPath(`upload/${config.uploadDir}/.git`),
  //   getPath("temp/.git")
  // );
  //  清空`upload`目录
  // await fs.emptyDir(getPath("upload"));
  // 执行`build.sh`脚本打包 html，生成 dist 目录
  // await execShellScriptContent(fs.readFileSync(getPath("build.sh") ,"utf-8")).then(
  //   console.log
  // );
  //拷贝`dist`至`upload`目录下，重命名为`www.html.com`
  // await fs.copy(config.distPath, getPath(`upload/${config.uploadDir}`));
  // 拷贝`temp/.git`至`upload/www.html.com/.git`
  // await fs.copy(
  //   getPath("temp/.git"),
  //   getPath(`upload/${config.uploadDir}/.git`)
  // );
  // 在执行`www.html.com`目录下执行 git 命令，完成`push`动作
  const uploadScriptContent = fs
    .readFileSync(getPath("template/upload.sh"), "utf-8")
    .replace("${path}", getPath(`upload/${config.uploadDir}`))
    .replace("${msg}", new Date().toISOString());
  await execShellScriptContent(uploadScriptContent).then(console.log);
}

main().then(() => {
  console.log("执行完毕");
});

function getPath(relativePath) {
  return path.join(__dirname, relativePath);
}

function getConfig() {
  const str = fs.readFileSync(getPath("config.json"), "utf8");
  return JSON.parse(str);
}
