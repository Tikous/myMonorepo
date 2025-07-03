import { useState } from 'react'
import { 
  Button, 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Label
} from '@mymonorepo/ui-components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <h1>My Monorepo Web App</h1>
        <p>这是一个使用公共组件库的前端应用示例</p>
        
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            计数: {count}
          </Button>
          
          <div className="component-showcase">
            <h2>组件展示</h2>
            
            <div className="component-group">
              <Label>按钮组件:</Label>
              <div className="button-group">
                <Button variant="default">默认按钮</Button>
                <Button variant="secondary">次要按钮</Button>
                <Button variant="outline">轮廓按钮</Button>
                <Button variant="destructive">危险按钮</Button>
                <Button variant="ghost">幽灵按钮</Button>
                <Button variant="link">链接按钮</Button>
              </div>
            </div>

            <div className="component-group">
              <Label>对话框组件:</Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">打开对话框</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>这是一个对话框</DialogTitle>
                  </DialogHeader>
                  <p>这是基于 Radix UI 的对话框组件。</p>
                </DialogContent>
              </Dialog>
            </div>

            <div className="component-group">
              <Label>下拉菜单组件:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">打开菜单</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>菜单项 1</DropdownMenuItem>
                  <DropdownMenuItem>菜单项 2</DropdownMenuItem>
                  <DropdownMenuItem>菜单项 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        <p className="read-the-docs">
          这个应用使用了 <code>@mymonorepo/ui-components</code> 包中的组件
        </p>
      </div>
    </div>
  )
}

export default App 