import type { Meta, StoryObj } from '@storybook/react'
import ChatArea from './index'

const meta: Meta<typeof ChatArea> = {
  component: ChatArea,
}

export default meta
type Story = StoryObj<typeof ChatArea>

export const Left: Story = {}
