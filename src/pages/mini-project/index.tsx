import React from 'react'
import MiniProject from '@/components/MiniProject'

const Project = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Mini Project</h2>
      <p>学習で個人的に作成したプロジェクトです。</p>

      <div className='flex flex-wrap'>
        <MiniProject
          title='感想文生成ジェネレーター'
          description='設定から、感想文を自動生成するツール'
          href='https://opinion-ai.vercel.app/'
          github='https://github.com/maaaashi/opinion-ai'
          qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
        />
        {/*
        <MiniProject
          title='感想文生成ジェネレーター'
          description='設定から、感想文を自動生成するツール'
          href='https://opinion-ai.vercel.app/'
          github='https://github.com/maaaashi/opinion-ai'
          qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
        /> */}
      </div>
    </div>
  )
}

export default Project
