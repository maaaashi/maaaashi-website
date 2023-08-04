import { QiitaConvertResponse } from '@/pages/qiita'
import Image from 'next/image'
import React, { FC } from 'react'
import qiita from '@/libs/images/qiita.png'
import Tags from '../Tags'

interface Props {
  articles: QiitaConvertResponse[]
}

const Article: FC<Props> = ({ articles }) => {
  if (articles.length === 0) return <></>

  return (
    <div className='rounded-box m-4 flex space-x-4 overflow-x-auto bg-neutral p-4'>
      {articles.map((article, index) => (
        <div className='carousel-item flex-col gap-2' key={index}>
          <a
            href={article.url}
            target='_blank'
            className='relative hover:brightness-75'
          >
            <Image src={qiita} alt={article.title} height={200} />
            <p className='absolute left-16 right-14 top-14 line-clamp-2 font-bold text-black md:line-clamp-3'>
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
