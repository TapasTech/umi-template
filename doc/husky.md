# husky

### 1、简介

通俗解释：git 钩子插件

除了可以在 package.json 中配置 husky，也可以在 .husky 目录下通过 cli 配置 husky。

### 2、常见 git hooks

`cd .git/hooks`

- commit-msg
- pre-commit
- pre-push
- pre-rebase

### 3、安装

```sh
yarn add husky -D

# Edit package.json > prepare script: "prepare": "husky install"
yarn prepare
```

### 3、`commit-msg` & `pre-commit`

- git commit msg 规范
  - `yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'`
  - 参考: https://github.com/conventional-changelog/commitlint
- git commit 之前，代码 eslint 检查和修复
  - `yarn husky add .husky/pre-commit 'yarn lint-staged'`
