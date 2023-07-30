import React, { FC } from 'react'

interface Props {
  data: string
  setData: Function
}

const WordleInput: FC<Props> = ({ data, setData }) => {
  return (
    <input
      type='text'
      maxLength={1}
      value={data}
      className='input-bordered input w-12'
      onChange={(e) => {
        setData(e.target.value)
      }}
    />
  )
}

export default WordleInput
