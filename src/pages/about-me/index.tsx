import React from 'react'
import { aboutMeData } from '@/libs/about-me'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Image from 'next/image'
import aboutMe from '@/libs/images/rep.jpg'
import TechStack from '@/components/TechStack'

export type Stack = {
  [key in 'frontend' | 'backend' | 'infrastructure' | 'test' | 'other']: {
    tech: string
    level: number
  }[]
}

const AboutMe = () => {
  const stacks: Stack = {
    frontend: [
      { tech: 'HTML', level: 4 },
      { tech: 'CSS', level: 3 },
      { tech: 'JavaScript', level: 4 },
      { tech: 'TypeScript', level: 5 },
      { tech: 'React', level: 4 },
      { tech: 'Next.js', level: 4 },
      { tech: 'Vue', level: 3 },
      { tech: 'Svelte', level: 4 },
      { tech: 'SvelteKit', level: 4 },
      { tech: 'Apollo', level: 4 },
      { tech: 'TailwindCSS', level: 4 },
    ],
    backend: [
      { tech: 'Ruby', level: 5 },
      { tech: 'RubyOnRails', level: 5 },
      { tech: 'mysql', level: 3 },
      { tech: 'TypeSCript', level: 5 },
      { tech: 'nodejs', level: 3 },
      { tech: 'Keycloak', level: 3 },
      { tech: 'Graphql', level: 4 },
      { tech: 'Supabase', level: 3 },
    ],
    infrastructure: [
      { tech: 'AWS', level: 4 },
      { tech: 'ServerlessFrameWork', level: 4 },
      { tech: 'AWS CDK', level: 3 },
    ],
    test: [
      { tech: 'vitest', level: 4 },
      { tech: 'jest', level: 3 },
      { tech: 'Rspec', level: 5 },
    ],
    other: [
      { tech: 'Git', level: 5 },
      { tech: 'docker', level: 4 },
      { tech: 'docker swarm', level: 3 },
    ],
  }
  return (
    <div
      className='markdown overflow-y-auto'
      style={{ height: 'calc(100vh - 100px) ' }}
    >
      <h2 className='mb-5 text-2xl font-bold'>About ME</h2>
      {/* <div style={{ height: '20000px' }}> */}
      <div className='h-fit'>
        <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-evenly'>
          <div className='avatar md:m-0'>
            <div className='w-32 rounded-full md:w-48'>
              <Image src={aboutMe} alt='大岡正志' />
            </div>
          </div>
          <div className='w-72 rounded-md bg-base-100 p-3 md:w-96'>
            <p>
              <span className='font-bold'>名前：</span>
              大岡正志
            </p>
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
            <p className='my-2'>
              <span className='font-bold'>資格：</span>
              AWS Solution Architect Associate
            </p>
          </div>
        </div>
        {/* <ReactMarkdown remarkPlugins={[gfm]}>{aboutMeData()}</ReactMarkdown> */}
        <div className='mt-14 border bg-base-100 p-5'>
          <h3>スキル / 得意な技術</h3>
          <div className='flex flex-col gap-4 p-5 md:flex-row md:flex-wrap md:justify-evenly'>
            <TechStack stacks={stacks.frontend} title='FrontEnd' />
            <TechStack stacks={stacks.backend} title='BackEnd' />
            <TechStack stacks={stacks.infrastructure} title='InfraStructure' />
            <TechStack stacks={stacks.test} title='Test' />
            <TechStack stacks={stacks.other} title='Other' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
