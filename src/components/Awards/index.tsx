import { QiitaConvertResponse } from '@/pages/qiita'
import Image from 'next/image'
import React, { FC } from 'react'
import Tags from '../Tags'
import qiita from '@/libs/images/qiita.png'
import css from './awards.module.css'

interface Props {
  title: string
  article: QiitaConvertResponse
  description: string
}

const Awards: FC<Props> = ({ title, article, description }) => {
  return (
    <div className='flex w-fit flex-col items-center'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p>{description}</p>
      <a
        href={article.url}
        target='_blank'
        className='relative block hover:brightness-75'
      >
        <Image
          src={qiita}
          alt={article.title}
          height={200}
          className={css.award}
        />
        <p className='absolute left-16 right-14 top-14 font-bold text-black'>
          {article.title}
        </p>
        <div className='absolute bottom-0'>
          <Tags tags={article.tags} />
        </div>
      </a>
    </div>
  )
}

export default Awards
