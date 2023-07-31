import WordleKeyboard from '@/components/WordleKeyboard'
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
  const [useWords, setUseWords] = useState<{
    [key in string]: '' | 'hit' | 'blow'
  }>({})
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

  const judge = (word: string, index: number): 'hit' | 'blow' | '' => {
    if (answer![index] === word) {
      setUseWords((c) => {
        return { ...c, [word]: 'hit' }
      })
      return 'hit'
    } else if (answer!.includes(word)) {
      setUseWords((c) => {
        return { ...c, [word]: 'blow' }
      })
      return 'blow'
    } else {
      setUseWords((c) => {
        return { ...c, [word]: '' }
      })
      return ''
    }
  }

  const searchWord = () => {
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
              result: judge(s, index),
            }
          }),
        ]
      })
      setSearchWords([...initial])
    } else {
      setErrorMessage('存在しない言葉です。')
    }
  }

  const keyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault()
    if (isComposing && e.key === 'Enter') {
      if (index === inputRefs.length - 1) {
        searchWord()
      } else {
        inputRefs[index + 1].current!.focus()
      }
    }
  }

  const setInputValue = (value: string) => {
    const blankInputIndex = searchWords.findIndex((word) => {
      return !word
    })
    let targetIndex: number

    if (blankInputIndex === -1) {
      targetIndex = inputRefs.length - 1
    } else {
      targetIndex = blankInputIndex
    }

    if (inputRefs[targetIndex] && inputRefs[targetIndex].current) {
      inputRefs[targetIndex].current!.value = value
      setSearchWords(
        (c) =>
          c.map((c2, index2) => {
            if (targetIndex === index2) {
              return value
            }
            return c2
          }) as Word
      )
    } else {
      const lastIndex = inputRefs.length - 1
      inputRefs[lastIndex].current!.value = value
      setSearchWords(
        (c) =>
          c.map((c2, index2) => {
            if (lastIndex === index2) {
              return value
            }
            return c2
          }) as Word
      )
    }

    if (inputRefs[targetIndex + 1] && inputRefs[targetIndex + 1].current) {
      inputRefs[targetIndex + 1].current!.focus()
    }
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    searchWord()
  }

  useEffect(() => {
    setAnswer(pickUpAnswer())
  }, [])

  return (
    <div>
      <h2 className='text-2xl'>Wordle 作成中...</h2>
      <div className='flex flex-col items-center justify-center'>
        <form onSubmit={submitHandler}>
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
                  className='input-bordered input aspect-square w-12'
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
        <div className='mb-4 flex w-full justify-around'>
          <div className='flex h-fit'>
            <div className='border border-primary p-2'>Hit</div>
            <div className='border border-secondary p-2'>Blow</div>
          </div>
          <div>
            {searchResults.map((result, index) => {
              return (
                <div key={index} className='flex'>
                  {result.map(({ value, result }, i) => {
                    return (
                      <div
                        key={i}
                        className={`flex aspect-square w-12 items-center justify-center border p-2 ${setClassName(
                          result
                        )}`}
                      >
                        {value}
                      </div>
                    )
                  })}
                </div>
              )
            })}
            {[...Array(5 - searchResults.length)].map((_, i) => {
              return (
                <div key={i} className='flex'>
                  <div className='aspect-square w-12 border p-2'></div>
                  <div className='aspect-square w-12 border p-2'></div>
                  <div className='aspect-square w-12 border p-2'></div>
                  <div className='aspect-square w-12 border p-2'></div>
                  <div className='aspect-square w-12 border p-2'></div>
                </div>
              )
            })}
          </div>
          <div>hoge</div>
        </div>
        <WordleKeyboard setAnswer={setInputValue} useWords={useWords} />
      </div>
    </div>
  )
}

export default Woodle
