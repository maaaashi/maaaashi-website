import WordleInput from '@/components/WordleInput'
import { originalWords, pickUpAnswer } from '@/libs/words'
import React, {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'

const Woodle = () => {
  type Word = [string, string, string, string, string]
  const [answer, setAnswer] = useState<Word>()
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const initial: Word = ['', '', '', '', '']
  const [searchWords, setSearchWords] = useState<Word>([...initial])
  const [errorMessage, setErrorMessage] = useState('')
  const [searchResults, setSearchResults] = useState<
    { result: '' | 'hit' | 'blow'; value: string }[][]
  >([])
  const [isComposing, setIsComposing] = useState(false)

  const setClassName = (result: 'hit' | 'blow' | '') => {
    switch (result) {
      case 'hit':
        return 'border-primary'
      case 'blow':
        return 'border-secondary'
      case '':
        return ''
    }
  }

  const keyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault()
    if (isComposing && e.key === 'Enter') {
      if (index === inputRefs.length - 1) {
        const target = searchWords.join('')

        if (target.length !== 5) {
          setErrorMessage('５文字すべて埋めてください。')
          return
        }

        if (originalWords.includes(target)) {
          setSearchResults((c) => {
            return [
              ...c,
              searchWords.map((s, index) => {
                return {
                  value: s,
                  result: answer[index] === s ? 'hit' : '',
                }
              }),
            ]
          })
          setSearchWords([...initial])
        } else {
          setErrorMessage('存在しない言葉です。')
        }
      } else {
        inputRefs[index + 1].current!.focus()
      }
    }
  }

  useEffect(() => {
    setAnswer(pickUpAnswer())
  }, [])

  return (
    <div>
      <h2 className='text-2xl'>Wordle 作成中...</h2>
      <div className='flex'>
        {answer?.map((a, i) => {
          return <div key={i}>{a}</div>
        })}
      </div>
      <div className='w-full'>
        <form>
          <div
            className={`w-fit rounded-lg p-2 ${
              errorMessage ? 'border border-error' : ''
            }`}
          >
            {inputRefs.map((ref, index) => {
              return (
                <input
                  key={index}
                  type='text'
                  ref={ref}
                  maxLength={1}
                  value={searchWords[index]}
                  className='input-bordered input w-12'
                  onKeyDown={(e) => keyDownHandler(e, index)}
                  onCompositionStart={() => setIsComposing(false)}
                  onCompositionEnd={() => setIsComposing(true)}
                  onChange={(e) => {
                    setErrorMessage('')
                    setSearchWords(
                      (c) =>
                        c.map((c2, index2) => {
                          if (index === index2) {
                            return e.target.value
                          }
                          return c2
                        }) as Word
                    )
                  }}
                />
              )
            })}
            <button className='btn-primary btn w-12' type='submit'>
              Go
            </button>
            <button
              className='btn-warning btn w-24'
              type='button'
              onClick={() => {
                setSearchWords([...initial])
                setErrorMessage('')
              }}
            >
              Clear
            </button>
          </div>
          <div className='font-bold text-error'>{errorMessage}</div>
        </form>
      </div>
      <div className='flex'>
        <div className='border border-primary p-2'>Hit</div>
        <div className='border border-secondary p-2'>Blow</div>
      </div>
      {searchResults.map((result, index) => {
        return (
          <div key={index} className='flex'>
            {result.map(({ value, result }, i) => {
              return (
                <div key={i} className={`border p-2 ${setClassName(result)}`}>
                  {value}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Woodle
