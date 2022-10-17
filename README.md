# frontend-auto-packager

自动执行脚本命令完成，打包、复制、上传。

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

## 原理 & 工作流

- 自行处理项目打包，生成`dist`目标目录
- 删除`temp/.git`
- 拷贝`upload/www.html.com/.git`至`temp/.git`
- 清空`upload`目录
- 拷贝`dist`至`upload`目录下，重命名为`www.html.com`
- 拷贝`temp/.git`至`upload/www.html.com/.git`
- 在执行`www.html.com`目录下执行 git 命令，完成`push`动作
