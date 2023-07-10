import { Stack } from '@/pages/about-me'
import Image from 'next/image'
import { FC } from 'react'
import { icons } from '@/libs/images'

interface Props {
  stacks: Stack['frontend']
  isShow: boolean
}

const TechStack: FC<Props> = ({ stacks, isShow }) => {
  if (!isShow) return <></>

  return (
    <div className='h-fit w-full bg-base-200 p-5' style={{ minWidth: '100px' }}>
      {stacks.map((stack, index) => {
        return (
          <div key={index} className='mx-auto w-full md:w-4/5'>
            <div className='flex items-center gap-2'>
              <div className='avatar md:m-0'>
                <div className='w-5 rounded-full'>
                  <Image
                    src={icons[stack.tech.toLocaleLowerCase()]}
                    alt={stack.tech}
                  />
                </div>
              </div>
              {stack.isShow && '★'}
              {stack.tech}
            </div>
            <progress
              className={`progress ${
                stack.isShow ? 'progress-accent' : 'progress-secondary'
              }`}
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
