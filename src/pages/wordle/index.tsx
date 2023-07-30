import WordleInput from '@/components/WordleInput'
import { originalWords } from '@/libs/words'
import React, { FormEvent, useState } from 'react'

const Woodle = () => {
  type Words = [string, string, string, string, string]
  const initial: Words = ['', '', '', '', '']
  const [searchWords, setSearchWords] = useState<Words>([...initial])
  const [errorMessage, setErrorMessage] = useState('')
  const [searchResults, setSearchResults] = useState<
    { result: '' | 'hit' | 'blow'; value: string }[][]
  >([])

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    const target = searchWords.join('')

    if (target.length !== 5) {
      setErrorMessage('５文字すべて埋めてください。')
      return
    }

    if (originalWords.includes(target)) {
      setSearchResults((c) => {
        return [
          ...c,
          searchWords.map((s) => {
            return {
              value: s,
              result: 'hit',
            }
          }),
        ]
      })
      setSearchWords([...initial])
    } else {
      setErrorMessage('存在しない言葉です。')
    }
  }

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

  return (
    <div>
      <h2 className='text-2xl'>Wordle 作成中...</h2>
      <div className='w-full'>
        <form onSubmit={submitHandler}>
          <div
            className={`w-fit rounded-lg p-2 ${
              errorMessage ? 'border border-error' : ''
            }`}
          >
            <WordleInput
              data={searchWords[0]}
              setData={(value: string) => {
                setErrorMessage('')
                setSearchWords((c) => [value, c[1], c[2], c[3], c[4]])
              }}
            />
            <WordleInput
              data={searchWords[1]}
              setData={(value: string) => {
                setErrorMessage('')
                setSearchWords((c) => [c[0], value, c[2], c[3], c[4]])
              }}
            />
            <WordleInput
              data={searchWords[2]}
              setData={(value: string) => {
                setErrorMessage('')
                setSearchWords((c) => [c[0], c[1], value, c[3], c[4]])
              }}
            />
            <WordleInput
              data={searchWords[3]}
              setData={(value: string) => {
                setErrorMessage('')
                setSearchWords((c) => [c[0], c[1], c[2], value, c[4]])
              }}
            />
            <WordleInput
              data={searchWords[4]}
              setData={(value: string) => {
                setErrorMessage('')
                setSearchWords((c) => [c[0], c[1], c[2], c[3], value])
              }}
            />
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
