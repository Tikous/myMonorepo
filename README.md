# My Monorepo

基于 pnpm 和 lerna 的 monorepo 项目，包含公共组件库和前端应用。

## 项目结构

```
myMonorepo/
├── packages/
│   ├── ui-components/     # 公共组件库 (基于 radix-ui)
│   └── web-app/          # 前端应用
├── app/                  # Storybook 应用
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

### @mymonorepo/storybook-app

用于展示和测试 UI 组件库的 Storybook 应用。

## 📚 Storybook 使用

### 启动 Storybook

```bash
# 方式1：从根目录启动
pnpm storybook

# 方式2：构建组件库后启动
pnpm build-components
pnpm storybook
```

### 构建 Storybook

```bash
# 构建静态文件
pnpm build-storybook
```

### 组件开发流程

1. 在 `packages/ui-components/src/components/` 中开发组件
2. 在 `app/src/stories/` 中为组件创建 Stories
3. 运行 `pnpm build-components` 构建组件库
4. 运行 `pnpm storybook` 查看组件效果

### 访问 Storybook

启动后访问：http://localhost:6006

Storybook 包含了所有组件的：
- 交互式演示
- 属性文档
- 使用示例
- 设计规范 