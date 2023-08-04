import type { Meta, StoryObj } from '@storybook/react'
import MiniProject from './index'

const meta: Meta<typeof MiniProject> = {
  component: MiniProject,
}

export default meta
type Story = StoryObj<typeof MiniProject>

export const OpinionAI: Story = {
  args: {
    title: 'test title',
    href: 'https://www.google.com',
    description: 'test description',
    qiita: 'https://qiita.com',
    image: 'open',
    github: 'https://github.com',
    side: 'left',
  },
}

export const MaaaashiWebSite: Story = {
  args: {
    title: 'test title',
    href: 'https://www.google.com',
    description: 'test description',
    qiita: 'https://qiita.com',
    image: 'website',
    github: 'https://github.com',
    side: 'left',
  },
}

export const STT: Story = {
  args: {
    title: 'test title',
    href: 'https://www.google.com',
    description: 'test description',
    qiita: 'https://qiita.com',
    image: 'stt',
    github: 'https://github.com',
    side: 'left',
  },
}
