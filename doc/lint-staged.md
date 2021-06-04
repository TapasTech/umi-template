# lint-staged

> 拒绝 💩 一样的代码提交到代码仓库

### 1、简介

lint-staged 可以在 git staged 阶段的文件上执行 lint。通俗点说就是当我们运行 prettier, eslint, tsc 的命令检查代码时，只会检查通过 `git add` 添加到暂存区的文件，避免每次检查都把整个项目的代码都检查一遍。

### 2、安装

`yarn add lint-staged -D`

### 3、三种配置方式

- 在 package.json 中配置 lint-staged

  ```json
  {
    "lint-staged": {
      "_": "your-cmd"
    }
  }
  ```

- 在 .lintstagedrc 中配置 lint-staged

  ```json
  {
    "_": "your-cmd"
  }
  ```

- 在 lint-staged.config.js 中配置 lint-staged

  ```js
  module.exports = {
    _: 'your-cmd',
  };
  ```
