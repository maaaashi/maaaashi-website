import { QiitaConvertResponse } from '@/pages/qiita'
import React, { FC, FormEvent, useEffect, useState } from 'react'
import Article from '../Article'

interface Props {
  articles: QiitaConvertResponse[]
}

const Search: FC<Props> = ({ articles }) => {
  const [titleMode, setTitleMode] = useState(true)
  const [searched, setSearched] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState<QiitaConvertResponse[]>([])

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    const searchResults = articles.filter((article) => {
      if (titleMode) {
        return article.title.includes(userInput)
      } else {
        return article.body.includes(userInput)
      }
    })

    setSearched(true)
    setResults(searchResults)
  }

  useEffect(() => {
    const searchResults = articles.filter((article) => {
      if (titleMode) {
        return article.title.includes(userInput)
      } else {
        return article.body.includes(userInput)
      }
    })
    setResults(searchResults)
  }, [articles])

  return (
    <div>
      <div className='flex items-center gap-4'>
        <h3 className='text-lg font-bold'>Search</h3>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='mode'
            className='toggle'
            value={'aaaafeafe'}
            checked={titleMode}
            onChange={(e) => {
              setTitleMode(e.target.checked)
            }}
          />
          <label htmlFor='mode'>
            {titleMode ? 'タイトル検索' : '本文検索'}
          </label>
        </div>
      </div>
      <div className='form-control w-full p-4'>
        <form onSubmit={submitHandler} className='flex flex-1'>
          <input
            type='text'
            placeholder='検索したい内容を入力'
            value={userInput}
            required
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
            className='input-bordered input w-full'
          />
          <button type='submit' className='btn-primary btn'>
            検索
          </button>
        </form>
      </div>
      {searched ? (
        results.length !== 0 ? (
          <Article articles={results} />
        ) : (
          <div>検索結果がありませんでした。</div>
        )
      ) : (
        <></>
      )}
    </div>
  )
}

export default Search
