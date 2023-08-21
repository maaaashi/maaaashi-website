import type { Meta, StoryObj } from '@storybook/react'

import Page from '../pages/mini-project/index'

const meta = {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const View: Story = {}
