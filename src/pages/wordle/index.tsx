import WordleInput from '@/components/WordleInput'
import { originalWords } from '@/libs/words'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { z } from 'zod'

const Woodle = () => {
  const [searchWords, setSearchWords] = useState<
    [string, string, string, string, string]
  >(['', '', '', '', ''])
  const [errorMessage, setErrorMessage] = useState('')

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    if (originalWords.includes(searchWords.join(''))) {
      alert('あるね！')
    } else {
      alert('ないね！')
    }
  }

  const changeValue = (
    value: string,
    schema: z.Schema,
    setState: Dispatch<SetStateAction<string>>
  ) => {
    try {
      schema.parse(value)
      setState('')
    } catch (error) {
      if (error instanceof z.ZodError) {
        setState(error.issues[0].message)
      }
    }
  }

  return (
    <div>
      <div className='form-control w-full'>
        <form onSubmit={submitHandler}>
          <div
            className={`input-group w-fit rounded-lg ${
              errorMessage ? 'border border-error' : ''
            }`}
          >
            <WordleInput
              data={searchWords[0]}
              setData={(value: string) => {
                setSearchWords((c) => [value, c[1], c[2], c[3], c[4]])
              }}
            />
            <WordleInput
              data={searchWords[1]}
              setData={(value: string) => {
                setSearchWords((c) => [c[0], value, c[2], c[3], c[4]])
              }}
            />
            <WordleInput
              data={searchWords[2]}
              setData={(value: string) => {
                setSearchWords((c) => [c[0], c[1], value, c[3], c[4]])
              }}
            />
            <WordleInput
              data={searchWords[3]}
              setData={(value: string) => {
                setSearchWords((c) => [c[0], c[1], c[2], value, c[4]])
              }}
            />
            <WordleInput
              data={searchWords[4]}
              setData={(value: string) => {
                setSearchWords((c) => [c[0], c[1], c[2], c[3], value])
              }}
            />
            <button className='btn w-12' type='submit'>
              Go
            </button>
          </div>
          <div>{errorMessage}</div>
        </form>
        {searchWords.map((s, i) => {
          return <div key={i}>{s}</div>
        })}
      </div>
    </div>
  )
}

export default Woodle
