import React, { FC } from 'react'

interface Props {
  setAnswer: Function
}

const WordleKey: FC<{ keyword: string; setAnswer: Function }> = ({
  keyword,
  setAnswer,
}) => {
  return (
    <kbd
      className={`kbd cursor-pointer bg-base-100 hover:bg-base-200 ${
        keyword ? '' : 'pointer-events-none'
      }`}
      onClick={() => {
        setAnswer(keyword)
      }}
    >
      {keyword}
    </kbd>
  )
}

const WordleKeyboard: FC<Props> = ({ setAnswer }) => {
  const rows = [
    ['わ', '', 'を', '', 'ん'],
    ['ら', 'り', 'る', 'れ', 'ろ'],
    ['や', '', 'ゆ', '', 'よ'],
    ['ま', 'み', 'む', 'め', 'も'],
    ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['な', 'に', 'ぬ', 'ね', 'の'],
    ['た', 'ち', 'つ', 'て', 'と'],
    ['さ', 'し', 'す', 'せ', 'そ'],
    ['か', 'き', 'く', 'け', 'こ'],
    ['あ', 'い', 'う', 'え', 'お'],
  ]

  const otherRows = [
    ['ゃ', 'ゅ', 'ょ', 'っ', 'ー'],
    ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
    ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
    ['だ', 'ぢ', 'づ', 'で', 'ど'],
    ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
    ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
  ]

  return (
    <div className='flex flex-col items-end gap-2 rounded-xl bg-base-300 p-3'>
      <div className='flex w-fit gap-1'>
        {rows.map((row, index) => {
          return (
            <div className='flex w-fit flex-col gap-1' key={index}>
              {row.map((r, i) => {
                return (
                  <div key={i} className='flex flex-col'>
                    <WordleKey keyword={r} setAnswer={setAnswer} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='flex w-fit gap-1'>
        {otherRows.map((row, index) => {
          return (
            <div className='flex w-fit flex-col gap-1' key={index}>
              {row.map((r, i) => {
                return (
                  <div key={i} className='flex flex-col'>
                    <WordleKey keyword={r} setAnswer={setAnswer} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WordleKeyboard
