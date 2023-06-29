import React, { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiQiita } from 'react-icons/si'
import open from './opinionAi.png'
import Image from 'next/image'

interface Props {
  title: string
  href: string
  qiita?: string
  github?: string
}

const MiniProject: FC<Props> = ({ title, href, qiita, github }) => {
  return (
    <div className='flex items-center gap-5 p-5'>
      <div className='w-96'>
        <Image src={open} alt={title} />
      </div>
      <div className='text-center'>
        <h3>{title}</h3>
        <p>afe</p>
        <p>afefefe</p>
        <p>afefe</p>

        <a href={github}>
          <AiFillGithub size={40} />
        </a>
        <a href={qiita} className='h-fit w-fit'>
          <SiQiita
            size={40}
            color='white'
            style={{ backgroundColor: 'rgba(85, 198, 0)' }}
          />
        </a>
      </div>
    </div>
  )
}

export default MiniProject
