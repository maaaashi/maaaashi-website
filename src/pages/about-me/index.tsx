import React, { useState } from 'react'
import { aboutMeData } from '@/libs/about-me'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Image from 'next/image'
import aboutMe from '@/libs/images/rep.jpg'
import TechStack from '@/components/TechStack'
import TabButton from '@/components/TabButton'
import List from '@/components/TabButton/List'
import { BiSolidDownArrow } from 'react-icons/bi'
import Tab from '@/components/TabButton/Tab'

type Tech = 'frontend' | 'backend' | 'infrastructure' | 'test' | 'other'

export type Stack = {
  [key in Tech]: {
    tech: string
    level: number
    isShow?: boolean
  }[]
}

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<Tech>('frontend')

  const activeTabToTitle = () => {
    switch (activeTab) {
      case 'frontend':
        return 'フロントエンド'
      case 'backend':
        return 'バックエンド'
      case 'infrastructure':
        return 'インフラ'
      case 'test':
        return 'テスト'
      case 'other':
        return 'その他'
    }
  }

  const stacks: Stack = {
    frontend: [
      { tech: 'HTML', level: 4 },
      { tech: 'CSS', level: 3 },
      { tech: 'JavaScript', level: 4 },
      { tech: 'TypeScript', level: 5, isShow: true },
      { tech: 'React', level: 5, isShow: true },
      { tech: 'Next.js', level: 4 },
      { tech: 'Vue', level: 3 },
      { tech: 'Svelte', level: 4 },
      { tech: 'SvelteKit', level: 4 },
      { tech: 'Apollo', level: 4 },
      { tech: 'TailwindCSS', level: 4 },
      { tech: 'Bootstrap', level: 4 },
    ],
    backend: [
      { tech: 'Ruby', level: 5, isShow: true },
      { tech: 'RubyOnRails', level: 5, isShow: true },
      { tech: 'mysql', level: 3 },
      { tech: 'TypeScript', level: 5 },
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
      { tech: 'GitLab Runner', level: 3 },
      { tech: 'docker', level: 4 },
      { tech: 'docker swarm', level: 4 },
    ],
  }
  return (
    <div className='overflow-y-auto'>
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
          <h3 className='text-lg font-bold'>スキル / 得意な技術</h3>
          {/* <div className='btn-group mt-3 hidden w-full justify-center px-5 md:inline-flex'>
            <TabButton
              isActive={activeTab === 'frontend'}
              clickMethod={setActiveTab}
              setTab='frontend'
              title='フロントエンド'
            />
            <TabButton
              isActive={activeTab === 'backend'}
              clickMethod={setActiveTab}
              setTab='backend'
              title='バックエンド'
            />
            <TabButton
              isActive={activeTab === 'infrastructure'}
              clickMethod={setActiveTab}
              setTab='infrastructure'
              title='インフラ'
            />
            <TabButton
              isActive={activeTab === 'test'}
              clickMethod={setActiveTab}
              setTab='test'
              title='テスト'
            />
            <TabButton
              isActive={activeTab === 'other'}
              clickMethod={setActiveTab}
              setTab='other'
              title='その他'
            />
          </div> */}
          <div className='tabs mt-5 hidden w-full justify-center px-5 md:flex'>
            <Tab
              isActive={activeTab === 'frontend'}
              onClick={setActiveTab}
              title='フロントエンド'
              setTab='frontend'
            />
            <Tab
              isActive={activeTab === 'backend'}
              onClick={setActiveTab}
              title='バックエンド'
              setTab='backend'
            />
            <Tab
              isActive={activeTab === 'infrastructure'}
              onClick={setActiveTab}
              title='インフラ'
              setTab='infrastructure'
            />
            <Tab
              isActive={activeTab === 'test'}
              onClick={setActiveTab}
              title='テスト'
              setTab='test'
            />
            <Tab
              isActive={activeTab === 'other'}
              onClick={setActiveTab}
              title='その他'
              setTab='other'
            />
          </div>
          <div className='dropdown-end dropdown flex justify-end md:hidden'>
            <label tabIndex={0} className='btn-accent btn my-3 mr-5'>
              {activeTabToTitle()}
              <BiSolidDownArrow />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow'
            >
              <List
                isActive={activeTab === 'frontend'}
                onClick={setActiveTab}
                title='フロントエンド'
                setTab='frontend'
              />
              <List
                isActive={activeTab === 'backend'}
                onClick={setActiveTab}
                title='バックエンド'
                setTab='backend'
              />
              <List
                isActive={activeTab === 'infrastructure'}
                onClick={setActiveTab}
                title='インフラ'
                setTab='infrastructure'
              />
              <List
                isActive={activeTab === 'frontend'}
                onClick={setActiveTab}
                title='フロントエンド'
                setTab='frontend'
              />
              <List
                isActive={activeTab === 'test'}
                onClick={setActiveTab}
                title='テスト'
                setTab='test'
              />
              <List
                isActive={activeTab === 'other'}
                onClick={setActiveTab}
                title='その他'
                setTab='other'
              />
            </ul>
          </div>
          <div className='w-full p-5 pt-0'>
            <TechStack
              isShow={activeTab === 'frontend'}
              stacks={stacks.frontend}
            />
            <TechStack
              isShow={activeTab === 'backend'}
              stacks={stacks.backend}
            />
            <TechStack
              isShow={activeTab === 'infrastructure'}
              stacks={stacks.infrastructure}
            />
            <TechStack isShow={activeTab === 'test'} stacks={stacks.test} />
            <TechStack isShow={activeTab === 'other'} stacks={stacks.other} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
