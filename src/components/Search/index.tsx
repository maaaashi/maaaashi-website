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
      <h3 className='text-lg font-bold'>Search</h3>
      <div className='form-control m-4 w-full max-w-xs'>
        <div className='flex gap-3'>
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
        <label className='label'>
          <span className='label-text'>検索したい内容</span>
        </label>
        <form onSubmit={submitHandler} className='flex'>
          <input
            type='text'
            placeholder='Type here'
            value={userInput}
            required
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
            className='input-bordered input w-full max-w-xs'
          />
          <button type='submit' className='btn-primary btn'>
            検索
          </button>
        </form>
      </div>
      {searched ? <Article articles={results} /> : <></>}
    </div>
  )
}

export default Search
