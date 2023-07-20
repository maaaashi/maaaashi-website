import Image from 'next/image'
import React, { FC } from 'react'
import aboutMe from '@/libs/images/rep.jpg'
import css from './index.module.css'

interface Props {
  title: string
  content: string
}

const ChatBubble: FC<Props> = ({ title, content }) => {
  return (
    <div className={`${css.chat} chat chat-start`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <Image src={aboutMe} alt='大岡正志' />
        </div>
      </div>
      <div className='chat-header font-bold'>
        {title}
      </div>
      <div className='chat-bubble'>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ChatBubble
