import { QiitaResponse } from '@/pages/qiita'
import Image from 'next/image'
import React, { FC } from 'react'
import qiita from '@/libs/images/qiita.png'
import Tags from './Tags'

interface Props {
  articles: QiitaResponse[]
}

const Article: FC<Props> = ({ articles }) => {
  return (
    <div className='carousel-center carousel rounded-box m-4 space-x-4 bg-neutral p-4'>
      {articles.map((article, index) => (
        <div className='carousel-item flex-col gap-2' key={index}>
          <a href={article.url} target='_blank' className='relative'>
            <Image src={qiita} alt={article.title} height={200} />
            <p className='absolute left-16 right-14 top-14 font-bold'>
              {article.title}
            </p>
            <div className='absolute bottom-0'>
              <Tags tags={article.tags} />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Article
