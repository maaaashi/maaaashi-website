'use client'

import React, { useEffect, useState } from 'react'
import ChatBubble from '@/components/ChatBubble'

const ChatArea = () => {
  type ChatData = { content: string; side: 'left' | 'right' }
  const [chatList, setChatList] = useState<ChatData[]>([])

  const chatData = [
    { content: '名前', side: 'right' },
    { content: '大岡 正志', side: 'left' },
    { content: '出身地', side: 'right' },
    { content: '東京', side: 'left' },
    { content: 'エンジニア歴', side: 'right' },
    {
      content: `${new Date().getFullYear() - 2019}年目`,
      side: 'left',
    },
    { content: '好きなもの', side: 'right' },
    {
      content:
        'アジャイル開発・マイクロサービス・クリーンアーキテクチャ・TypeScript',
      side: 'left',
    },
    { content: '資格', side: 'right' },
    {
      content: 'AWS Solution Architect Associate',
      side: 'left',
    },
  ] as ChatData[]

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []

    chatData.map((data, index) => {
      let delayTime = 0
      if (index !== 0) {
        const beforeData = chatData.slice(0, index)
        beforeData.map((d) => {
          delayTime = delayTime + d.content.length * 100 + 200
        })
      }

      let timeout = setTimeout(() => {
        setChatList((c) => [...c, { content: data.content, side: data.side }])
      }, delayTime)
      timeouts.push(timeout)
    })

    return () => timeouts.forEach((t) => clearTimeout(t))
  }, [])

  return (
    <div className='rounded-lg bg-base-300 p-3'>
      {chatList.map((chat, index) => (
        <ChatBubble content={chat.content} side={chat.side} key={index} />
      ))}
    </div>
  )
}

export default ChatArea
