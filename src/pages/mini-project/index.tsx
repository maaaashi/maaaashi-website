import React from 'react'
import MiniProject from '@/components/MiniProject'

const Project = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Mini Project</h2>
      <p>学習で個人的に作成したプロジェクトです。</p>

      <div className='flex flex-wrap justify-between'>
        <MiniProject
          title='感想文生成ジェネレーター'
          description='設定から、感想文を自動生成するツール'
          image='open'
          href='https://opinion-ai.vercel.app/'
          github='https://github.com/maaaashi/opinion-ai'
          qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
        />

        <MiniProject
          title={`Maaaashi's website`}
          description='自分のプロフィールや投稿記事を紹介するサイト(このサイト)'
          image='website'
          href='https://maaaashi-website.mss-rep.com'
          github='https://github.com/maaaashi/maaaashi-website'
        />
      </div>
    </div>
  )
}

export default Project
