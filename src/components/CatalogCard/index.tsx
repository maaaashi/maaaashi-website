import { Catalog } from '@/domain/Catalog'
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { IoEnter } from 'react-icons/io5'
import { SiQiita } from 'react-icons/si'

interface Props {
  catalog: Catalog
}

export const CatalogCard: FC<Props> = ({ catalog }) => {
  return (
    <div className='card w-80 border-2 bg-base-100 shadow-xl'>
      <figure className='border-b-2'>
        <Image src={catalog.image} alt={`${catalog.title}_image`} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{catalog.title}</h2>
        <p>{catalog.description}</p>
        <div className='card-actions items-center justify-end'>
          <a
            target='_blank'
            href={catalog.github}
            className={`h-fit w-fit hover:brightness-90 ${
              catalog.github ?? 'hidden'
            }`}
          >
            <AiFillGithub size={45} className='rounded-full bg-white' />
          </a>
          <a
            target='_blank'
            href={catalog.qiita}
            className={`h-fit w-fit hover:brightness-90 ${
              catalog.qiita ?? 'hidden'
            }`}
          >
            <SiQiita
              size={40}
              color='white'
              className='rounded-full'
              style={{ backgroundColor: '#00c600' }}
            />
          </a>
          <a
            className='btn-outline btn-primary btn flex gap-2'
            href={catalog.link}
          >
            Entry
            <IoEnter size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}
