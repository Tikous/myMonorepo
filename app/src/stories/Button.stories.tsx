import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mymonorepo/ui-components';

const meta: Meta<typeof Button> = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '基于 Radix UI 的按钮组件，支持多种变体和尺寸。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: '按钮的样式变体',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: '按钮的尺寸',
    },
    asChild: {
      control: 'boolean',
      description: '是否作为子组件渲染',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
    },
    children: {
      control: 'text',
      description: '按钮内容',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础按钮
export const Default: Story = {
  args: {
    children: '默认按钮',
  },
};

// 不同变体
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '危险按钮',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '轮廓按钮',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '次要按钮',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '幽灵按钮',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: '链接按钮',
  },
};

// 不同尺寸
export const Small: Story = {
  args: {
    size: 'sm',
    children: '小按钮',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '大按钮',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🚀',
  },
};

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
    children: '禁用按钮',
  },
};

// 所有变体展示
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// 所有尺寸展示
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🚀</Button>
    </div>
  ),
}; 