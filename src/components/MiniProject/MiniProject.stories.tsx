import type { Meta, StoryObj } from '@storybook/react'
import MiniProject from './index'
import { ProjectType } from '@/pages/mini-project'

const meta: Meta<typeof MiniProject> = {
  component: MiniProject,
}

export default meta
type Story = StoryObj<typeof MiniProject>

const project: ProjectType = {
  title: 'test title',
  href: 'https://www.google.com',
  description: 'test description',
  qiita: 'https://qiita.com',
  image: 'open',
  github: 'https://github.com',
}

export const View: Story = {
  args: {
    project,
    number: 1,
  },
}
