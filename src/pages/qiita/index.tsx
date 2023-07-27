import Article from '@/components/Article'
import Awards from '@/components/Awards'
import Chart from '@/components/Chart'
import Search from '@/components/Search'
import { mockData } from '@/libs/mockdata'
import { GetStaticProps } from 'next'
import { FC, useEffect, useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import Swal from 'sweetalert2'

export interface QiitaResponse {
  rendered_body: string
  body: string
  comments_count: number
  created_at: string
  reactions_count: number
  likes_count: number
  stocks_count: number
  tags: { name: string; versions: any[] }[]
  title: string
  url: string
  page_views_count: number
}

export interface QiitaConvertResponse {
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

const convertArticles = (articles: QiitaResponse[]): QiitaConvertResponse[] => {
  return articles.map((article) => {
    return {
      ...article,
      created_at: new Date(article.created_at),
    }
  })
}

const sortCreatedAt = (
  { created_at: a_created_at }: QiitaConvertResponse,
  { created_at: b_craeted_at }: QiitaConvertResponse
) => {
  if (a_created_at.getTime() < b_craeted_at.getTime()) {
    return 1
  }
  return -1
}

const Qiita: FC<Props> = ({ articles: originalArticles }) => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [page, setPage] = useState(1)
  const filterArticles = (articles: QiitaConvertResponse[]) =>
    articles
      .filter((arti) => arti.created_at.getFullYear() === year)
      .sort(sortCreatedAt)

  const [articlesDataSouce, setArticlesDataSource] = useState<
    QiitaConvertResponse[]
  >(convertArticles(originalArticles))

  const getArticles = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      timer: 1000,
      timerProgressBar: false,
    })

    Toast.fire({
      icon: 'info',
      title: '最新データを取得します。',
    })

    try {
      const response = await fetch('/api/getArticles')
      const json = await response.json()

      if (articlesDataSouce.length !== convertArticles(json).length) {
        setArticlesDataSource(convertArticles(json))
      }

      Toast.fire({
        icon: 'success',
        title: '更新が完了しました。',
      })
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: '更新に失敗しました。',
      })
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  const maxPage = Math.floor(filterArticles(articlesDataSouce).length / 10) + 1

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
            page * 10 + 1 > filterArticles(articlesDataSouce).length
              ? filterArticles(articlesDataSouce).length
              : page * 10 + 1
          } of ${filterArticles(articlesDataSouce).length} articles`}
        </div>
      </div>
    )
  }

  const topView = () => {
    return filterArticles(articlesDataSouce).sort((a, b) => {
      if (a.page_views_count < b.page_views_count) {
        return 1
      }
      return -1
    })[0]
  }

  const topLikes = () => {
    return filterArticles(articlesDataSouce).sort((a, b) => {
      if (a.likes_count < b.likes_count) {
        return 1
      }
      return -1
    })[0]
  }

  const topStock = () => {
    return filterArticles(articlesDataSouce).sort((a, b) => {
      if (a.stocks_count < b.stocks_count) {
        return 1
      }
      return -1
    })[0]
  }

  return (
    <>
      <div className='flex flex-1 items-center justify-between md:p-4'>
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
        <h2 className='text-2xl font-bold'>{year}年</h2>
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
      <div className='divider'></div>

      <div className='overflow-y-auto py-5'>
        {filterArticles(articlesDataSouce).length === 0 ? (
          <div>投稿がありません。</div>
        ) : (
          <div>
            <h3 className='text-lg font-bold'>Article List</h3>
            <Article
              articles={filterArticles(articlesDataSouce).slice(
                (page - 1) * 10,
                page * 10
              )}
            />
            {pagenation()}
            <div className='divider'></div>
            <Search articles={filterArticles(articlesDataSouce)}></Search>
            <div className='divider'></div>
            <h3 className='text-lg font-bold'>Awards</h3>
            <div className='flex flex-wrap justify-evenly gap-10 p-4'>
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
            <Chart articles={filterArticles(articlesDataSouce)} />
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
