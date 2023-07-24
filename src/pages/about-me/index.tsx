import React, { useEffect, useRef, useState } from 'react'
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
import ChatBubble from '@/components/ChatBubble'

type Tech = 'frontend' | 'backend' | 'infrastructure' | 'test' | 'other'

export type Stack = {
  [key in Tech]: {
    tech: string
    level: number
    isShow?: boolean
  }[]
}

const AboutMe = () => {
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

  const chatsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const project = chatsRef.current
    if (!project) return

    project.childNodes.forEach((child, index) => {
      if (child instanceof Element) {
        setTimeout(() => {
          child.classList.add('start-animation')
        }, index * 1000)
      }
    })
  }, [])

  return (
    <div className='overflow-y-auto'>
      <h2 className='mb-5 text-2xl font-bold'>About ME</h2>
      {/* <div style={{ height: '20000px' }}> */}
      <div className='h-fit'>
        <div ref={chatsRef}>
          <ChatBubble title='名前' content='大岡正志' />
          <ChatBubble title='出身' content='東京' />
          <ChatBubble
            title='好きなもの'
            content='アジャイル開発・マイクロサービス'
          />
          <ChatBubble
            title='現在'
            content={`佐賀県のIT企業に就職し、都内で${
              new Date().getFullYear() - 2020
            }年間Webアプリケーションエンジニアとして働いています。`}
          />
          <ChatBubble title='資格' content='AWS Solution Architect Associate' />
        </div>
        {/* <ReactMarkdown remarkPlugins={[gfm]}>{aboutMeData()}</ReactMarkdown> */}
        <div className='mt-14 border bg-base-100 p-5'>
          <h3 className='mb-3 text-lg font-bold'>スキル / 得意な技術</h3>
          <div className='w-full p-5 pt-0'>
            <TechStack stacks={stacks.frontend.sort()} title='フロントエンド' />
            <TechStack stacks={stacks.backend} title='バックエンド' />
            <TechStack stacks={stacks.infrastructure} title='インフラ' />
            <TechStack stacks={stacks.test} title='テスト' />
            <TechStack stacks={stacks.other} title='その他' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
