import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import aboutMe from '@/libs/images/rep.jpg'

interface Props {
  side: 'left' | 'right'
  content: string
}

const ChatBubble: FC<Props> = ({ content, side }) => {
  const [textToShow, setTextToShow] = useState('')

  useEffect(() => {
    let text = ''
    let i = 0
    const interval = setInterval(() => {
      text += content[i]
      setTextToShow(text)
      i++
      if (i === content.length) {
        clearInterval(interval)
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  switch (side) {
    case 'left':
      return (
        <div className='chat chat-start'>
          <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <Image src={aboutMe} alt='大岡正志' />
            </div>
          </div>
          <div className='chat-bubble chat-bubble-accent break-all'>
            {textToShow.split('').map((c, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
                className='char'
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )
    case 'right':
      return (
        <div className='chat chat-end'>
          <div className='chat-bubble chat-bubble-info break-all'>
            {textToShow.split('').map((c, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
                className='char'
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )
  }
}

export default ChatBubble
