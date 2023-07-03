import React from 'react'
import { aboutMeData } from '@/libs/about-me'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Image from 'next/image'
import aboutMe from '@/libs/images/rep.jpg'
import TechStack from '@/components/TechStack'

const AboutMe = () => {
  return (
    <div
      className='markdown overflow-y-auto'
      style={{ height: 'calc(100vh - 100px) ' }}
    >
      <h2 className='text-2xl font-bold'>About</h2>
      {/* <div style={{ height: '20000px' }}> */}
      <div className='h-fit'>
        <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-evenly'>
          <div className='avatar md:m-0'>
            <div className='w-32 rounded-full md:w-48'>
              <Image src={aboutMe} alt='大岡正志' />
            </div>
          </div>
          <div className='w-72 md:w-96'>
            <h3 className='text-xl'>大岡正志</h3>
            <p className='my-2'>
              <span className='font-bold'>出身：</span>
              東京
            </p>
            <p className='my-2'>
              <span className='font-bold'>好きなもの：</span>
              アジャイル開発・マイクロサービス
            </p>
            <p className='my-2'>
              <span className='font-bold'>現在：</span>
              佐賀県のIT企業に就職し、都内で{new Date().getFullYear() - 2020}
              年間Webアプリケーションエンジニアとして働いています。
            </p>
          </div>
        </div>
        <div></div>
        {/* <ReactMarkdown remarkPlugins={[gfm]}>{aboutMeData()}</ReactMarkdown> */}
      </div>
      <div className='mt-14 border bg-base-100 p-5'>
        <h3>スキル</h3>
        <div className='flex flex-col gap-4 md:flex-row'>
          <TechStack title='FrontEnd' />
          <TechStack title='BackEnd' />
          <TechStack title='InfraStructure' />
          <TechStack title='Other' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
