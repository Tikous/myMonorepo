import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mymonorepo/ui-components';

const meta: Meta<typeof Button> = {
  title: '测试/简单测试',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 基础按钮: Story = {
  args: {
    children: '测试按钮',
  },
};

export const TestRender: Story = {
  render: () => (
    <div>
      <h1>简单测试</h1>
      <Button>这是一个测试按钮</Button>
      <p>如果你能看到这个页面，说明基本配置是正确的。</p>
    </div>
  ),
}; 