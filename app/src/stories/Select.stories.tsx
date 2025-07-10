import type { Meta, StoryObj } from '@storybook/react';
import { Select, Label } from '@mymonorepo/ui-components';

const meta: Meta<typeof Select> = {
  title: 'UI Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '基础选择框组件，支持多种尺寸和状态。',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 默认选择框
export const Default: Story = {
  render: () => (
    <Select>
      <option value="">请选择选项</option>
      <option value="option1">选项 1</option>
      <option value="option2">选项 2</option>
      <option value="option3">选项 3</option>
    </Select>
  ),
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <Label>小尺寸</Label>
        <Select size="sm">
          <option value="">小尺寸选择框</option>
          <option value="1">选项 1</option>
          <option value="2">选项 2</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>默认尺寸</Label>
        <Select>
          <option value="">默认尺寸选择框</option>
          <option value="1">选项 1</option>
          <option value="2">选项 2</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>大尺寸</Label>
        <Select size="lg">
          <option value="">大尺寸选择框</option>
          <option value="1">选项 1</option>
          <option value="2">选项 2</option>
        </Select>
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
        <Select>
          <option value="">请选择</option>
          <option value="1">选项 1</option>
          <option value="2">选项 2</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>禁用状态</Label>
        <Select disabled>
          <option value="">禁用状态</option>
          <option value="1">选项 1</option>
          <option value="2">选项 2</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>已选择状态</Label>
        <Select defaultValue="2">
          <option value="">请选择</option>
          <option value="1">选项 1</option>
          <option value="2">选项 2（已选择）</option>
          <option value="3">选项 3</option>
        </Select>
      </div>
    </div>
  ),
};

// 实际使用场景
export const UseCases: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label htmlFor="country">国家/地区</Label>
        <Select id="country">
          <option value="">请选择国家/地区</option>
          <option value="cn">中国</option>
          <option value="us">美国</option>
          <option value="jp">日本</option>
          <option value="kr">韩国</option>
          <option value="uk">英国</option>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="role">用户角色</Label>
        <Select id="role">
          <option value="">请选择角色</option>
          <option value="admin">管理员</option>
          <option value="editor">编辑者</option>
          <option value="viewer">查看者</option>
          <option value="guest">访客</option>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="priority">优先级</Label>
        <Select id="priority" defaultValue="medium">
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
          <option value="urgent">紧急</option>
        </Select>
      </div>
    </div>
  ),
}; 