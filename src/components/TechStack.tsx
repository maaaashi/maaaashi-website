import React, { FC } from 'react'

interface Props {
  title: string
}

const TechStack: FC<Props> = ({ title }) => {
  return <div className='w-full bg-base-200'>{title}</div>
}

export default TechStack
