import type { Meta, StoryObj } from '@storybook/react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@mymonorepo/ui-components';
import { Button, Input, Select, Label } from '@mymonorepo/ui-components';

const meta: Meta<typeof Dialog> = {
  title: 'UI Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '基于 Radix UI 的对话框组件，用于显示模态内容。',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础对话框
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>打开对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>对话框标题</DialogTitle>
          <DialogDescription>
            这是一个基础的对话框示例。您可以在这里放置任何内容。
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>这里是对话框的主要内容区域。</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">取消</Button>
          </DialogClose>
          <Button>确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 确认对话框
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">删除项目</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除</DialogTitle>
          <DialogDescription>
            此操作无法撤销。确定要删除这个项目吗？
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">取消</Button>
          </DialogClose>
          <Button variant="destructive">删除</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 表单对话框
export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>添加用户</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>添加新用户</DialogTitle>
          <DialogDescription>
            填写下面的表单来添加新用户。
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              type="text"
              placeholder="请输入姓名"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="请输入邮箱地址"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">角色</Label>
            <Select id="role">
              <option value="">请选择角色</option>
              <option value="admin">管理员</option>
              <option value="user">普通用户</option>
              <option value="guest">访客</option>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">取消</Button>
          </DialogClose>
          <Button>添加用户</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 信息对话框
export const InfoDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">查看详情</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>项目详情</DialogTitle>
          <DialogDescription>
            以下是项目的详细信息。
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-3">
          <div>
            <strong>项目名称：</strong>
            <span className="ml-2">UI 组件库</span>
          </div>
          <div>
            <strong>创建时间：</strong>
            <span className="ml-2">2024-01-01</span>
          </div>
          <div>
            <strong>状态：</strong>
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              进行中
            </span>
          </div>
          <div>
            <strong>描述：</strong>
            <p className="ml-2 mt-1 text-sm text-gray-600">
              这是一个基于 Radix UI 构建的 React 组件库，
              提供了一系列高质量的 UI 组件，支持主题定制和无障碍访问。
            </p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>关闭</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 无标题对话框
export const WithoutTitle: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">简单对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="py-4">
          <p className="text-center">
            这是一个没有标题的简单对话框。
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">关闭</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}; 