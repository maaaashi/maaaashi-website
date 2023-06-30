import React, { FC, useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import type { GetStaticProps } from 'next'
import { mockData } from '@/libs/mockdata'
import Article from '@/components/Article'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import Awards from '@/components/Awards'
import css from './index.module.css'
import { countAndSort } from '@/libs/countAndSort'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
}

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export interface QiitaResponse {
  rendered_body: string
  body: string
  comments_count: number
  created_at: Date
  reactions_count: number
  likes_count: number
  stocks_count: number
  tags: { name: string; versions: any[] }[]
  title: string
  url: string
  page_views_count: number
}

type Props = {
  articles: QiitaResponse[]
}

const convertArticles = (articles: any[]): QiitaResponse[] => {
  return articles.map((article) => {
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
}

const filterArticles = (articles: QiitaResponse[], year: number) => {
  return articles
    .filter((article) => {
      return year === article.created_at.getFullYear()
    })
    .sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
}

const Qiita: FC<Props> = ({ articles: originalArticles }) => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<QiitaResponse[]>(
    convertArticles(originalArticles)
  )
  const [filteredArticles, setFilterArticles] = useState(
    filterArticles(articles, year)
  )
  const [tagsCount, setTagsCount] = useState<{ [key in string]: number }[]>([])

  const getArticles = async () => {
    const response = await fetch('/api/getArticles')
    const json = await response.json()
    setArticles(convertArticles(json))
  }

  useEffect(() => {
    setFilterArticles(filterArticles(articles, year))
  }, [articles, year])

  useEffect(() => {
    const tags = filteredArticles
      .map((article) => {
        return article.tags.map((tag) => tag.name)
      })
      .flat()

    setTagsCount(countAndSort(tags))
  }, [year, filteredArticles])

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      getArticles()
    }
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: '記事投稿数',
        data: labels.map((_, index) => {
          return filteredArticles.filter((article) => {
            return index === article.created_at.getMonth()
          }).length
        }),
        backgroundColor: 'rgba(85, 198, 0, 0.5)',
      },
    ],
  }

  const tag_data = {
    labels: tagsCount.map((tag) => Object.keys(tag)[0]),
    datasets: [
      {
        label: 'タグ',
        data: tagsCount.map((tag) => Object.values(tag)[0]),
        backgroundColor: 'rgba(85, 198, 0, 0.5)',
      },
    ],
  }

  const maxPage = Math.floor(filteredArticles.length / 10) + 1

  const pagenation = () => {
    return (
      <div className='flex flex-col items-center'>
        <div className='join my-4 w-full justify-center'>
          <button
            className={
              page !== 1
                ? 'join-item btn-outline btn'
                : 'join-item btn-disabled btn'
            }
            onClick={() => setPage(1)}
          >
            {'<<'}
          </button>
          <button
            className={
              page !== 1
                ? 'join-item btn-outline btn'
                : 'join-item btn-disabled btn'
            }
            onClick={() => setPage(page - 1)}
          >
            {'<'}
          </button>
          {page !== 1 ? (
            <button
              className='join-item btn-outline btn'
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </button>
          ) : (
            ''
          )}
          <button className='join-item btn-active btn'>{page}</button>
          {page !== maxPage ? (
            <button
              className='join-item btn-outline btn'
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </button>
          ) : (
            ''
          )}
          <button
            className={
              page !== maxPage
                ? 'join-item btn-outline btn'
                : 'join-item btn-disabled btn'
            }
            onClick={() => setPage(page + 1)}
          >
            {'>'}
          </button>
          <button
            className={
              page !== maxPage
                ? 'join-item btn-outline btn'
                : 'join-item btn-disabled btn'
            }
            onClick={() => setPage(maxPage)}
          >
            {'>>'}
          </button>
        </div>
        <div>
          {`${(page - 1) * 10 + 1}-${
            page * 10 + 1 > filteredArticles.length
              ? filteredArticles.length
              : page * 10 + 1
          } of ${filteredArticles.length} articles`}
        </div>
      </div>
    )
  }

  const topView = () => {
    return filteredArticles.sort((a, b) => {
      if (a.page_views_count < b.page_views_count) {
        return 1
      }
      return -1
    })[0]
  }

  const topLikes = () => {
    return filteredArticles.sort((a, b) => {
      if (a.likes_count < b.likes_count) {
        return 1
      }
      return -1
    })[0]
  }

  const topStock = () => {
    return filteredArticles.sort((a, b) => {
      if (a.stocks_count < b.stocks_count) {
        return 1
      }
      return -1
    })[0]
  }

  return (
    <>
      <div className='flex border-b-2'>
        <div className='flex flex-1 items-center justify-between p-4'>
          <button
            className='btn-outline btn'
            onClick={() => {
              setYear(year - 1)
              setPage(1)
            }}
          >
            <MdNavigateBefore />
            {year - 1}年
          </button>
          <h2 className='text-2xl font-bold'>Qiita {year}年</h2>
          <button
            className='btn'
            onClick={() => {
              setYear(year + 1)
              setPage(1)
            }}
          >
            {year + 1}年
            <MdNavigateNext />
          </button>
        </div>
      </div>
      <div
        className='overflow-y-auto py-5'
        style={{ height: 'calc(100vh - 230px)' }}
      >
        {filteredArticles.length === 0 ? (
          <div>投稿がありません。</div>
        ) : (
          <div>
            <h3 className='text-lg font-bold'>Article List</h3>
            <Article
              articles={filteredArticles.slice((page - 1) * 10, page * 10)}
            />
            {pagenation()}
            <div className='divider'></div>
            <h3 className='text-lg font-bold'>Awards</h3>
            <div
              className={`flex flex-wrap justify-evenly gap-10 p-4 ${css.award}`}
            >
              <Awards
                title='今年最も閲覧された記事'
                article={topView()}
                description={`${topView().page_views_count} views`}
              />
              <Awards
                title='今年最もいいねされた記事'
                article={topLikes()}
                description={`${topView().likes_count} いいね`}
              />
              <Awards
                title='今年最もストックされた記事'
                article={topStock()}
                description={`${topView().stocks_count} ストック`}
              />
            </div>
            <div className='divider'></div>
            <h3 className='text-lg font-bold'>Data</h3>
            <div className='flex w-full flex-wrap justify-evenly gap-10'>
              <div className='w-full bg-white p-5 md:w-2/5'>
                <h4 className='font-bold text-black'>月別投稿数</h4>
                <Bar options={options} data={data} />
              </div>
              <div className='w-full bg-white p-5 md:w-2/5'>
                <h4 className='font-bold text-black'>タグ投稿数</h4>
                <Bar options={options} data={tag_data} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let articles: any[]

  if (process.env.NODE_ENV === 'development') {
    articles = mockData
  } else {
    const url = process.env.NEXT_PUBLIC_QIITA_URL!
    const apiKey = process.env.NEXT_PUBLIC_QIITA_APIKEY!
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    articles = (await response.json()) as any[]
  }

  return {
    props: {
      articles: articles.map((article) => {
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
          page_views_count: article.page_views_count,
        }
      }),
    },
  }
}

export default Qiita
