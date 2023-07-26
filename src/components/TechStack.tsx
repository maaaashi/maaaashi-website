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
            <div
              key={index}
              className='flex w-full flex-col items-center rounded-lg bg-base-100 p-3 md:tooltip md:w-fit md:items-start'
              data-tip={stack.tech}
            >
              <div className='flex flex-col items-center gap-2 md:flex-row'>
                <div className='avatar md:m-0'>
                  <div className='w-5 rounded'>
                    <Image
                      src={icons[stack.tech.toLocaleLowerCase()]}
                      alt={stack.tech}
                    />
                  </div>
                </div>
                <div className='block md:hidden'>{stack.tech}</div>
                <div className='rating pointer-events-none'>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechStack
