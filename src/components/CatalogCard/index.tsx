import { Catalog } from '@/domain/Catalog'
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

interface Props {
  catalog: Catalog
}

export const CatalogCard: FC<Props> = ({ catalog }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image src={catalog.image} alt={`${catalog.title}_image`} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{catalog.title}</h2>
        <p>{catalog.description}</p>
        <div className='card-actions justify-end'>
          <a className='btn-primary btn' href={catalog.link}>
            Entry
          </a>
        </div>
      </div>
    </div>
  )
}
