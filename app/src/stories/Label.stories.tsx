import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@mymonorepo/ui-components';

const meta: Meta<typeof Label> = {
  title: 'UI Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '基于 Radix UI 的标签组件，用于表单元素的标签。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '标签内容',
    },
    htmlFor: {
      control: 'text',
      description: '关联的表单元素ID',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础标签
export const Default: Story = {
  args: {
    children: '用户名',
  },
};

// 带表单元素的标签
export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">邮箱地址</Label>
      <input
        id="email"
        type="email"
        placeholder="请输入邮箱地址"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  ),
};

// 必填字段标签
export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">
        密码 <span className="text-red-500">*</span>
      </Label>
      <input
        id="password"
        type="password"
        placeholder="请输入密码"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  ),
};

// 禁用状态
export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled-input">禁用字段</Label>
      <input
        id="disabled-input"
        type="text"
        placeholder="此字段已禁用"
        disabled
        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
      />
    </div>
  ),
};

// 表单示例
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div>
        <Label htmlFor="name">姓名 <span className="text-red-500">*</span></Label>
        <input
          id="name"
          type="text"
          placeholder="请输入姓名"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="email-form">邮箱 <span className="text-red-500">*</span></Label>
        <input
          id="email-form"
          type="email"
          placeholder="请输入邮箱地址"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="phone">电话号码</Label>
        <input
          id="phone"
          type="tel"
          placeholder="请输入电话号码"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="message">留言</Label>
        <textarea
          id="message"
          placeholder="请输入留言内容"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  ),
}; 