import type { Meta, StoryObj } from '@storybook/react';
import { Input, Label } from '@mymonorepo/ui-components';

const meta: Meta<typeof Input> = {
  title: 'UI Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '基础输入框组件，支持多种尺寸和状态。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 默认输入框
export const Default: Story = {
  args: {
    placeholder: '请输入内容',
  },
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <Label>小尺寸</Label>
        <Input size="sm" placeholder="小尺寸输入框" />
      </div>
      <div className="space-y-2">
        <Label>默认尺寸</Label>
        <Input placeholder="默认尺寸输入框" />
      </div>
      <div className="space-y-2">
        <Label>大尺寸</Label>
        <Input size="lg" placeholder="大尺寸输入框" />
      </div>
    </div>
  ),
};

// 不同类型
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <Label htmlFor="text">文本输入</Label>
        <Input id="text" type="text" placeholder="请输入文本" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">邮箱输入</Label>
        <Input id="email" type="email" placeholder="请输入邮箱" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">密码输入</Label>
        <Input id="password" type="password" placeholder="请输入密码" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number">数字输入</Label>
        <Input id="number" type="number" placeholder="请输入数字" />
      </div>
    </div>
  ),
};

// 状态展示
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <Label>正常状态</Label>
        <Input placeholder="正常状态" />
      </div>
      <div className="space-y-2">
        <Label>禁用状态</Label>
        <Input placeholder="禁用状态" disabled />
      </div>
      <div className="space-y-2">
        <Label>有值状态</Label>
        <Input defaultValue="已有内容" />
      </div>
    </div>
  ),
};

// 表单示例
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="username">用户名</Label>
        <Input id="username" placeholder="请输入用户名" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">邮箱地址</Label>
        <Input id="email" type="email" placeholder="请输入邮箱地址" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">手机号码</Label>
        <Input id="phone" type="tel" placeholder="请输入手机号码" />
      </div>
    </form>
  ),
}; 