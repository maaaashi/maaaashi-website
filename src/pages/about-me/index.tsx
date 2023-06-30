import React from 'react'
import { aboutMeData } from '@/libs/about-me'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const AboutMe = () => {
  return (
    <div className='markdown'>
      <ReactMarkdown remarkPlugins={[gfm]}>{aboutMeData()}</ReactMarkdown>
    </div>
  )
}

export default AboutMe
