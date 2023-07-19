import { useEffect, useRef } from 'react'
import MiniProject from '@/components/MiniProject'
import MiniProjectRight from '@/components/MiniProject/right'

const Project = () => {
  const projectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const project = projectRef.current
    if (!project) return

    project.childNodes.forEach((child, index) => {
      if (child instanceof Element) {
        setTimeout(() => {
          child.classList.add('start-animation')
        }, index * 500)
      }
    })
  }, [])

  return (
    <div className='overflow-y-auto'>
      <h2 className='text-2xl font-bold'>Mini Project</h2>
      <p>学習で個人的に作成したプロジェクトです。</p>

      <div ref={projectRef} className='hidden md:block'>
        <MiniProject
          title='感想文生成ジェネレーター'
          description='設定から、感想文を自動生成するツール'
          image='open'
          href='https://opinion-ai.vercel.app/'
          github='https://github.com/maaaashi/opinion-ai'
          qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
        />

        <MiniProjectRight
          title={`Maaaashi's website`}
          description='自分のプロフィールや投稿記事を紹介するサイト(このサイト)'
          image='website'
          href='https://maaaashi-website.mss-rep.com'
          github='https://github.com/maaaashi/maaaashi-website'
        />

        <MiniProject
          title='SpeachToTranslate'
          description='AzureSTTを利用し、音声からテキスト変換し、DeepL翻訳をするアプリ'
          image='stt'
          href='https://speech-to-translate.vercel.app/'
          github='https://github.com/maaaashi/speech_to_translate'
        />
      </div>
      <div className='block md:hidden'>
        <MiniProjectRight
          title='感想文生成ジェネレーター'
          description='設定から、感想文を自動生成するツール'
          image='open'
          href='https://opinion-ai.vercel.app/'
          github='https://github.com/maaaashi/opinion-ai'
          qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
        />

        <MiniProjectRight
          title={`Maaaashi's website`}
          description='自分のプロフィールや投稿記事を紹介するサイト(このサイト)'
          image='website'
          href='https://maaaashi-website.mss-rep.com'
          github='https://github.com/maaaashi/maaaashi-website'
        />

        <MiniProjectRight
          title='SpeachToTranslate'
          description='AzureSTTを利用し、音声からテキスト変換し、DeepL翻訳をするアプリ'
          image='stt'
          href='https://speech-to-translate.vercel.app/'
          github='https://github.com/maaaashi/speech_to_translate'
        />
      </div>
    </div>
  )
}

export default Project
