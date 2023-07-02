import React, { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiQiita } from 'react-icons/si'
import open from './opinionAi.png'
import Image from 'next/image'

interface Props {
  title: string
  href: string
  description: string
  qiita?: string
  github?: string
}

const MiniProject: FC<Props> = ({
  title,
  href,
  description,
  qiita,
  github,
}) => {
  return (
    <div className='flex w-fit flex-wrap items-center justify-center gap-5 p-5'>
      <a
        href={href}
        target='_blank'
        className='max-w-sm rounded-2xl border hover:brightness-90'
      >
        <Image
          src={open}
          alt={title}
          className='h-auto rounded-lg shadow-lg shadow-black/30 transition-shadow'
        />
      </a>
      <div className='text-center'>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className='flex justify-evenly rounded-lg bg-base-300 p-5 shadow-lg shadow-black/30 transition-shadow'>
          <a target='_blank' href={github} className='hover:brightness-110'>
            <AiFillGithub size={40} />
          </a>
          <a
            target='_blank'
            href={qiita}
            className='h-fit w-fit hover:brightness-90'
          >
            <SiQiita
              size={40}
              color='white'
              style={{ backgroundColor: '#00c600' }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MiniProject
