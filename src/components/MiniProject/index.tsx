import React, { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiQiita } from 'react-icons/si'
import open from './opinionAi.png'
import website from './website.png'
import dvfs from './DrawVariousFigures.png'
import stt from './stt.png'
import reversi from './ChatGPTReversi.png'
import imageGenerator from './ImageGenerator.png'
import Image from 'next/image'
import { ProjectType } from '@/pages/mini-project'
import cookingAssistant from './cookingAssistant.png'

interface Props {
  project: ProjectType
  number: number
}

const images = {
  open,
  website,
  stt,
  dvfs,
  reversi,
  imageGenerator,
  cookingAssistant,
}

const MiniProject: FC<Props> = ({ project, number }) => {
  const { title, href, description, qiita, image, github } = project

  const boxClass = () => {
    let classname =
      'flex flex-wrap items-center justify-center md:justify-start gap-5 p-5'
    if (number % 2 === 0) {
      return classname
    }
    return classname + ' md:flex-row-reverse'
  }

  return (
    <div className={boxClass()}>
      <a
        href={href}
        target='_blank'
        className='max-w-sm rounded-2xl border hover:brightness-90'
      >
        <Image
          src={images[image]}
          alt={title}
          className='h-auto rounded-lg shadow-lg shadow-black/30 transition-shadow'
        />
      </a>
      <div className='w-full max-w-[14rem] text-center'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p>{description}</p>

        <div className='flex justify-evenly rounded-lg bg-base-300 p-5 shadow-lg shadow-black/30 transition-shadow'>
          <a target='_blank' href={github} className='hover:brightness-110'>
            <AiFillGithub size={40} />
          </a>
          {qiita ? (
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className='ml-auto flex flex-wrap items-center justify-end gap-5 p-5'>
  //     <div className='w-full max-w-[14rem] text-center'>
  //       <h3>{title}</h3>
  //       <p>{description}</p>

  //       <div className='flex justify-evenly rounded-lg bg-base-300 p-5 shadow-lg shadow-black/30 transition-shadow'>
  //         <a target='_blank' href={github} className='hover:brightness-110'>
  //           <AiFillGithub size={40} />
  //         </a>
  //         {qiita ? (
  //           <a
  //             target='_blank'
  //             href={qiita}
  //             className='h-fit w-fit hover:brightness-90'
  //           >
  //             <SiQiita
  //               size={40}
  //               color='white'
  //               style={{ backgroundColor: '#00c600' }}
  //             />
  //           </a>
  //         ) : (
  //           <></>
  //         )}
  //       </div>
  //     </div>
  //     <a
  //       href={href}
  //       target='_blank'
  //       className='max-w-sm rounded-2xl border hover:brightness-90'
  //     >
  //       <Image
  //         src={images[image]}
  //         alt={title}
  //         className='h-auto rounded-lg shadow-lg shadow-black/30 transition-shadow'
  //       />
  //     </a>
  //   </div>
  // )
}

export default MiniProject
