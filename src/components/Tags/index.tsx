import Image from 'next/image'
import React, { FC } from 'react'
import { icons } from '@/libs/images'

interface Props {
  tags: { name: string; versions: any[] }[]
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className='avatar-group justify-center gap-2 -space-x-6'>
      {tags.map((tag, index) => {
        const icon = icons[tag.name.toLocaleLowerCase()]
        if (icon) {
          return (
            <div key={index} className='avatar'>
              <div className='w-8 rounded-full ring ring-primary ring-offset-4 ring-offset-base-100 md:w-12'>
                <Image src={icon} alt={tag.name} className='bg-white' />
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Tags
