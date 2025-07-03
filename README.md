# My Monorepo

基于 pnpm 和 lerna 的 monorepo 项目，包含公共组件库和前端应用。

## 项目结构

```
myMonorepo/
├── packages/
│   ├── ui-components/     # 公共组件库 (基于 radix-ui)
│   └── web-app/          # 前端应用
├── package.json
├── pnpm-workspace.yaml
├── lerna.json
└── README.md
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有项目的开发模式
pnpm dev

# 或者分别启动
pnpm --filter @mymonorepo/ui-components dev
pnpm --filter @mymonorepo/web-app dev
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @mymonorepo/ui-components build
```

### 添加依赖

```bash
# 为特定包添加依赖
pnpm add react --filter @mymonorepo/ui-components

# 添加工作空间内的依赖
pnpm add @mymonorepo/ui-components --filter @mymonorepo/web-app --workspace
```

### 发布

```bash
# 使用 lerna 发布
pnpm publish
```

## 包说明

### @mymonorepo/ui-components

基于 radix-ui 的 React 组件库，提供常用的 UI 组件。

### @mymonorepo/web-app

使用公共组件库的前端应用示例。 