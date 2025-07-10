import type { Meta, StoryObj } from '@storybook/react';
import * as UIComponents from '@mymonorepo/ui-components';

const meta: Meta = {
  title: '测试/所有组件',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '测试所有组件的导入是否正常',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 组件导入测试: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">所有组件导入测试</h2>
        <div className="space-y-2">
          {Object.keys(UIComponents).map((componentName) => (
            <div key={componentName} className="p-2 bg-gray-100 rounded">
              <span className="text-sm font-medium">{componentName}</span>
              <span className="ml-2 text-xs text-green-600">✓ 导入成功</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
}; 