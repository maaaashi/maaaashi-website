import type { Meta, StoryObj } from '@storybook/react'
import Tags from './index'

const meta: Meta<typeof Tags> = {
  component: Tags,
}

export default meta
type Story = StoryObj<typeof Tags>

export const View: Story = {
  args: {
    tags: [
      { name: 'ruby', versions: [] },
      { name: 'typescript', versions: [] },
      { name: 'jest', versions: [] },
    ],
  },
}
