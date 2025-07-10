import type { Meta, StoryObj } from '@storybook/react';
import { 
  Button,
  Label,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mymonorepo/ui-components';

const meta: Meta = {
  title: '展示/样式展示',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '展示组件库的完整样式效果',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 完整样式展示: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">UI 组件库展示</h1>
        <p className="text-muted-foreground">基于 Radix UI 构建的现代化组件库</p>
      </div>

      {/* Button 展示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">按钮组件</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">基础样式</h3>
            <div className="flex flex-wrap gap-3">
              <Button>默认按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="outline">轮廓按钮</Button>
              <Button variant="ghost">幽灵按钮</Button>
              <Button variant="destructive">危险按钮</Button>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">尺寸变体</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">小按钮</Button>
              <Button size="default">默认</Button>
              <Button size="lg">大按钮</Button>
              <Button size="icon">🔍</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form 展示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">表单组件</h2>
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <form className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="name">姓名</Label>
              <input
                id="name"
                type="text"
                placeholder="请输入您的姓名"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <input
                id="email"
                type="email"
                placeholder="请输入您的邮箱"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">消息</Label>
              <textarea
                id="message"
                placeholder="请输入您的消息"
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <Button type="submit" className="w-full">
              提交表单
            </Button>
          </form>
        </div>
      </section>

      {/* Dialog 展示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">对话框组件</h2>
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">基础对话框</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>确认操作</DialogTitle>
                <DialogDescription>
                  您确定要执行此操作吗？此操作无法撤销。
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="outline">取消</Button>
                </DialogClose>
                <Button>确认</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button>表单对话框</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>创建新项目</DialogTitle>
                <DialogDescription>
                  填写以下信息来创建一个新项目。
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">项目名称</Label>
                  <input
                    id="project-name"
                    placeholder="我的新项目"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-desc">项目描述</Label>
                  <textarea
                    id="project-desc"
                    placeholder="描述您的项目..."
                    rows={3}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">取消</Button>
                </DialogClose>
                <Button>创建项目</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* DropdownMenu 展示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">下拉菜单组件</h2>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">用户菜单</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>我的账户</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>个人资料</DropdownMenuItem>
              <DropdownMenuItem>账户设置</DropdownMenuItem>
              <DropdownMenuItem>订阅管理</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                退出登录
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>操作菜单</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>可用操作</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>📝 编辑</DropdownMenuItem>
              <DropdownMenuItem>📋 复制</DropdownMenuItem>
              <DropdownMenuItem>📤 分享</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                🗑️ 删除
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* 状态展示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">状态展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-medium text-green-800">成功状态</h3>
            <p className="text-sm text-green-600 mt-1">操作已成功完成</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-medium text-yellow-800">警告状态</h3>
            <p className="text-sm text-yellow-600 mt-1">请注意此操作</p>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="font-medium text-red-800">错误状态</h3>
            <p className="text-sm text-red-600 mt-1">操作执行失败</p>
          </div>
        </div>
      </section>

      {/* 禁用状态 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">禁用状态</h2>
        <div className="flex flex-wrap gap-3">
          <Button disabled>禁用按钮</Button>
          <Button variant="outline" disabled>禁用轮廓</Button>
          <Button variant="secondary" disabled>禁用次要</Button>
          <Button variant="destructive" disabled>禁用危险</Button>
        </div>
      </section>
    </div>
  ),
};

export const 深色主题预览: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0f172a' },
      ],
    },
  },
  render: () => (
    <div className="max-w-2xl mx-auto space-y-6 p-6" style={{ filter: 'invert(1) hue-rotate(180deg)' }}>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">深色主题预览</h1>
        <p className="text-muted-foreground">组件在深色主题下的效果</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-3">
          <Button>主要按钮</Button>
          <Button variant="outline">轮廓按钮</Button>
          <Button variant="secondary">次要按钮</Button>
        </div>
        
        <div className="p-4 bg-card border rounded-lg">
          <Label>示例表单</Label>
          <input
            type="text"
            placeholder="输入内容"
            className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
          />
        </div>
      </div>
    </div>
  ),
}; 