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
import type { GetServerSideProps } from 'next'
import { mockData } from '@/libs/mockdata'
import Article from '@/components/Article'

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
  stocks_count: number
  tags: { name: string; versions: any[] }[]
  title: string
  url: string
  page_views_count: number
}

type Props = {
  articles: QiitaResponse[]
}

const Qiita: FC<Props> = ({ articles }) => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [page, setPage] = useState(1)
  const [filteredArticles, setFilteredArticles] = useState<any[]>([])

  const convertedArticles = articles.map((article) => {
    return {
      rendered_body: article.rendered_body,
      body: article.body,
      comments_count: article.comments_count,
      created_at: new Date(article.created_at),
      reactions_count: article.reactions_count,
      stocks_count: article.stocks_count,
      tags: article.tags,
      title: article.title,
      url: article.url,
      page_views_count: article.page_views_count,
    }
  })

  useEffect(() => {
    setFilteredArticles(
      convertedArticles
        .filter((article) => {
          return year === article.created_at.getFullYear()
        })
        .sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
    )
  }, [year])

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

  return (
    <>
      <div className='bg-base-200 sm:flex sm:justify-between'>
        <h2 className='text-xl font-bold'>{year} Summary</h2>
        <div className='btn-group my-4 w-full justify-center sm:m-0 sm:w-fit'>
          <button
            className='btn-outline btn'
            onClick={() => {
              setYear(year - 1)
              setPage(1)
            }}
          >
            Prev
          </button>
          <button
            className='btn-outline btn-active btn'
            onClick={() => {
              setYear(new Date().getFullYear())
              setPage(1)
            }}
          >
            Current
          </button>
          <button
            className='btn-outline btn'
            onClick={() => {
              setYear(year + 1)
              setPage(1)
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div
        className='overflow-y-auto'
        style={{ height: 'calc(100vh - 150px)' }}
      >
        {filteredArticles.length === 0 ? (
          <div>投稿がありません。</div>
        ) : (
          <div>
            <Article
              articles={filteredArticles.slice((page - 1) * 10, page * 10)}
            />
            {pagenation()}
            <Bar options={options} data={data} />
          </div>
        )}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const url = process.env.NEXT_PUBLIC_QIITA_URL!
  // const apiKey = process.env.NEXT_PUBLIC_QIITA_APIKEY!
  // const response = await fetch(url, {
  //   headers: {
  //     Authorization: `Bearer ${apiKey}`,
  //   },
  // })
  // const articles = (await response.json()) as QiitaResponse[]

  const articles = mockData

  return {
    props: {
      articles: articles.map((article) => {
        return {
          rendered_body: article.rendered_body,
          body: article.body,
          comments_count: article.comments_count,
          created_at: article.created_at,
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
