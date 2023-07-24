import { Stack } from '@/pages/about-me'
import Image from 'next/image'
import { FC } from 'react'
import { icons } from '@/libs/images'

interface Props {
  stacks: Stack['frontend']
  title: string
}

const TechStack: FC<Props> = ({ stacks, title }) => {
  return (
    <div className='mb-3 h-fit w-full rounded-lg bg-base-200 p-7'>
      <h3 className='text-xl font-bold'>{title}</h3>

      <div className='flex flex-wrap gap-5'>
        {stacks.map((stack, index) => {
          return (
            <div key={index} className='p-3'>
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
              <div className='rating'>
                {[...Array(5)].map((_, index) => {
                  return (
                    <input
                      type='radio'
                      key={index}
                      name={stack.tech}
                      checked={stack.level === index + 1}
                      className={`mask mask-star-2 ${
                        stack.isShow ? 'bg-accent' : 'bg-info'
                      }`}
                      disabled
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechStack
