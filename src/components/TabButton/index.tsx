import { FC } from 'react'

interface Props {
  isActive: boolean
  clickMethod: Function
  title: string
  setTab: string
}

const TabButton: FC<Props> = ({ isActive, clickMethod, title, setTab }) => {
  return (
    <button
      onClick={() => clickMethod(setTab)}
      className={`btn-outline btn-accent btn ${
        isActive ? 'btn-active flex-1' : ''
      }`}
    >
      {title}
    </button>
  )
}

export default TabButton
