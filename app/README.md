# Storybook App

这是一个用于展示 `@mymonorepo/ui-components` 组件库的 Storybook 应用。

## 🚀 快速开始

### 1. 安装依赖

在项目根目录运行：

```bash
pnpm install
```

### 2. 构建组件库

首先需要构建 ui-components 包：

```bash
pnpm --filter @mymonorepo/ui-components build
```

### 3. 启动 Storybook

```bash
pnpm --filter @mymonorepo/storybook-app storybook
```

或者在 `app` 目录下运行：

```bash
cd app
pnpm storybook
```

Storybook 将在 `http://localhost:6006` 启动。

## 📦 可用脚本

- `pnpm storybook` - 启动开发服务器
- `pnpm build-storybook` - 构建静态文件
- `pnpm preview-storybook` - 预览构建的静态文件

## 📚 组件文档

当前包含以下组件的 Stories：

### 基础组件
- **Button** - 按钮组件，支持多种变体和尺寸
- **Label** - 标签组件，用于表单元素

### 交互组件
- **Dialog** - 对话框组件，用于显示模态内容
- **DropdownMenu** - 下拉菜单组件，支持多种菜单项类型

## 🔧 配置

### Storybook 配置
- `.storybook/main.ts` - 主配置文件
- `.storybook/preview.ts` - 预览配置
- `.storybook/preview-head.html` - 自定义样式

### TypeScript 配置
- `tsconfig.json` - TypeScript 配置，包含路径映射

## 🎨 样式

组件使用基于 Radix UI 的设计系统，支持：
- CSS 变量定制
- 响应式设计
- 无障碍访问
- 主题定制

## 📝 添加新的 Stories

要为新组件添加 Stories，请在 `src/stories/` 目录下创建对应的 `.stories.tsx` 文件：

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@mymonorepo/ui-components';

const meta: Meta<typeof YourComponent> = {
  title: 'UI Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 组件属性
  },
};
```

## 🤝 贡献

1. 在 `packages/ui-components` 中添加新组件
2. 在 `app/src/stories` 中创建对应的 Stories
3. 更新文档和示例
4. 提交 Pull Request

## 📄 相关链接

- [Storybook 官方文档](https://storybook.js.org/)
- [Radix UI 文档](https://www.radix-ui.com/)
- [组件库源码](../packages/ui-components/) 