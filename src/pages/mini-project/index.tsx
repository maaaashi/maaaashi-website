import React from 'react'
import MiniProject from '@/components/MiniProject'

const Project = () => {
  return (
    <div>
      <h2>Mini Project</h2>
      <p>学習で個人的に作成したプロジェクトです。</p>

      <MiniProject
        title='感想文生成ジェネレーター'
        href='https://opinion-ai.vercel.app/'
        github='https://github.com/maaaashi/opinion-ai'
        qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
      />
    </div>
  )
}

export default Project
