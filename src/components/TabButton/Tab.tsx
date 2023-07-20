import React, { FC } from 'react'

interface Props {
  isActive: boolean
  onClick: Function
  title: string
  setTab: string
}

const Tab: FC<Props> = ({ isActive, onClick, setTab, title }) => {
  return (
    <a
      className={`tab-bordered tab ${isActive ? 'tab-active flex-1' : ''}`}
      onClick={() => {
        onClick(setTab)
      }}
    >
      {title}
    </a>
  )
}

export default Tab
