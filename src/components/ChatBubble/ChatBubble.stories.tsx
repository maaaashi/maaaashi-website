import type { Meta, StoryObj } from '@storybook/react'
import ChatBubble from './index'

const meta: Meta<typeof ChatBubble> = {
  component: ChatBubble,
}

export default meta
type Story = StoryObj<typeof ChatBubble>

export const Left: Story = {
  args: {
    side: 'left',
    content: 'left side chatbubble',
  },
}

export const Right: Story = {
  args: {
    side: 'right',
    content: 'left side chatbubble',
  },
}
