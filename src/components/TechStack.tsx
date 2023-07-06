import { Stack } from '@/pages/about-me'
import Image from 'next/image'
import React, { FC } from 'react'
import { icons } from '@/libs/images'

interface Props {
  title: string
  stacks: Stack['frontend']
}

const TechStack: FC<Props> = ({ title, stacks }) => {
  return (
    <div
      className='w-full max-w-full bg-base-200 p-5 md:w-72'
      style={{ minWidth: '100px' }}
    >
      <h4 className='font-bold'>{title}</h4>
      {stacks.map((stack, index) => {
        return (
          <div key={index}>
            <div className='flex items-center gap-2'>
              <div className='avatar md:m-0'>
                <div className='w-5 rounded-full'>
                  <Image
                    src={icons[stack.tech.toLocaleLowerCase()]}
                    alt={stack.tech}
                  />
                </div>
              </div>
              {stack.tech}
            </div>
            <progress
              className='progress progress-secondary w-full max-w-full md:w-56'
              value={stack.level}
              max='5'
            ></progress>
          </div>
        )
      })}
    </div>
  )
}

export default TechStack
