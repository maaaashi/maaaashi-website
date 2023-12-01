import type { Meta, StoryObj } from '@storybook/react'

import Page from '../pages/qiita/index'
import { mockData } from '@/libs/mockdata'

const meta = {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

const responseMockData = mockData.map((article) => {
  return {
    rendered_body: article.rendered_body,
    body: article.body,
    comments_count: article.comments_count,
    created_at: article.created_at,
    likes_count: article.likes_count,
    reactions_count: article.reactions_count,
    stocks_count: article.stocks_count,
    tags: article.tags,
    title: article.title,
    url: article.url,
    private: article.private,
    page_views_count: article.page_views_count,
  }
})

export const View: Story = {
  args: {
    articles: responseMockData,
  },
}
