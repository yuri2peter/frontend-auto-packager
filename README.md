# frontend-auto-packager

自动执行脚本命令完成html的复制、上传。
很适合以下工作流：
`vite`编写前端并打包 =>包`push`至`github`的某个html仓库 => `netlify`监听html仓库更新网站

## 准备工作

1. 安装依赖 `npm ci`
2. 运行一次初始化命令 `npm run init`
3. 克隆 `html仓库`至`upload`目录

```sh
cd upload
git clone <your html dist repository>
```

4. 填写配置文件 config.json

```json
{
  "distPath": "/myproject/dist",
  "uploadDir": "www.html.com"
}
```

- `uploadDir`指的是第 3 步克隆后生成的目录名
- `distPath`指的是打包完成后生成的 dist 目录的绝对路径

## 使用

`npm start`

## main.js脚本流程

- 删除`temp/.git`
- 拷贝`upload/www.html.com/.git`至`temp/.git`
- 清空`upload`目录
- 拷贝`dist`至`upload`目录下，重命名为`www.html.com`
- 拷贝`temp/.git`至`upload/www.html.com/.git`
- 在`www.html.com`目录下执行 git 命令，完成`push`动作
