import type { Meta, StoryObj } from '@storybook/react'
import Article from './index'
import { mockData } from '@/libs/mockdata'

const meta: Meta<typeof Article> = {
  component: Article,
}

export default meta
type Story = StoryObj<typeof Article>

const responseMockData = mockData.map((article) => {
  return {
    rendered_body: article.rendered_body,
    body: article.body,
    comments_count: article.comments_count,
    created_at: new Date(article.created_at),
    likes_count: article.likes_count,
    reactions_count: article.reactions_count,
    stocks_count: article.stocks_count,
    tags: article.tags,
    title: article.title,
    url: article.url,
    page_views_count: article.page_views_count,
  }
})

export const View: Story = {
  args: {
    articles: responseMockData,
  },
}
