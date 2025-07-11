import { useState } from 'react'
import { 
  Button, 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  Input,
  Label,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@mymonorepo/ui-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">UI Components 测试</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">按钮组件</h2>
        <div className="flex gap-4">
          <Button onClick={() => setCount(count + 1)}>
            点击次数: {count}
          </Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="destructive">危险按钮</Button>
          <Button variant="outline">轮廓按钮</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">表单组件</h2>
        <div className="space-y-2 max-w-md">
          <Label htmlFor="name">姓名</Label>
          <Input id="name" placeholder="请输入您的姓名" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">对话框组件</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>打开对话框</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>确认操作</DialogTitle>
              <DialogDescription>
                这是一个测试对话框，用于验证组件库的样式是否正确加载。
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dialog-input">输入内容</Label>
                <Input id="dialog-input" placeholder="在对话框中输入内容" />
              </div>
              <div className="flex gap-2">
                <Button>确认</Button>
                <Button variant="outline">取消</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">下拉菜单组件</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">打开菜单</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>个人资料</DropdownMenuItem>
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuItem>退出登录</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  )
}

export default App 