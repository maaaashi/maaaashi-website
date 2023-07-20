import { FC } from 'react'

interface Props {
  onClick: Function
  title: string
  setTab: string
  isActive: boolean
}

const List: FC<Props> = ({ onClick, setTab, title, isActive }) => {
  return (
    <li>
      <a
        onClick={() => {
          onClick(setTab)
        }}
        className={`${isActive ? 'active' : ''}`}
      >
        {title}
      </a>
    </li>
  )
}

export default List
