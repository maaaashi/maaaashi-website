import type { Meta, StoryObj } from '@storybook/react'
import TechStack from './index'

const meta: Meta<typeof TechStack> = {
  component: TechStack,
}

export default meta
type Story = StoryObj<typeof TechStack>

export const View: Story = {
  args: {
    stacks: [
      {
        tech: 'react',
        level: 5,
        isShow: true,
      },
      {
        tech: 'vue',
        level: 4,
      },
    ],
    title: 'frontend',
  },
}
