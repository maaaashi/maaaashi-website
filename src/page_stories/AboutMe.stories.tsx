import type { Meta, StoryObj } from '@storybook/react'

import Page from '../pages/about-me/index'

const meta: Meta<typeof Page> = {
  component: Page,
}

export default meta
type Story = StoryObj<typeof meta>

export const View: Story = {}
