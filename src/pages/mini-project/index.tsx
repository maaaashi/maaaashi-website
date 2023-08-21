import MiniProject from '@/components/MiniProject'

const Project = () => {
  return (
    <div className='container mx-auto flex-1 overflow-y-auto bg-base-200 p-5'>
      <div className='h-full p-5'>
        <h2 className='text-2xl font-bold'>Mini Project</h2>
        <p>学習で個人的に作成したプロジェクトです。</p>

        <div className='hidden md:block'>
          <MiniProject
            title='感想文生成ジェネレーター'
            description='設定から、感想文を自動生成するツール'
            image='open'
            side='left'
            href='https://opinion-ai.vercel.app/'
            github='https://github.com/maaaashi/opinion-ai'
            qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
          />

          <MiniProject
            title={`Maaaashi's website`}
            description='自分のプロフィールや投稿記事を紹介するサイト(このサイト)'
            image='website'
            side='right'
            href='https://maaaashi-website.mss-rep.com'
            github='https://github.com/maaaashi/maaaashi-website'
          />

          <MiniProject
            title='SpeachToTranslate'
            description='AzureSTTを利用し、音声からテキスト変換し、DeepL翻訳をするアプリ'
            image='stt'
            side='left'
            href='https://speech-to-translate.vercel.app/'
            github='https://github.com/maaaashi/speech_to_translate'
          />

          <MiniProject
            title='DrawVariousFigures'
            description='様々な図形をChart.jsを利用して描画するアプリ'
            image='dvfs'
            side='right'
            href='https://draw-various-figures.mss-rep.com/'
            github='https://github.com/maaaashi/draw-various-figures'
          />
        </div>
        <div className='block md:hidden'>
          <MiniProject
            title='感想文生成ジェネレーター'
            description='設定から、感想文を自動生成するツール'
            image='open'
            side='right'
            href='https://opinion-ai.vercel.app/'
            github='https://github.com/maaaashi/opinion-ai'
            qiita='https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
          />

          <MiniProject
            title={`Maaaashi's website`}
            description='自分のプロフィールや投稿記事を紹介するサイト(このサイト)'
            image='website'
            side='right'
            href='https://maaaashi-website.mss-rep.com'
            github='https://github.com/maaaashi/maaaashi-website'
          />

          <MiniProject
            title='SpeachToTranslate'
            description='AzureSTTを利用し、音声からテキスト変換し、DeepL翻訳をするアプリ'
            image='stt'
            side='right'
            href='https://speech-to-translate.vercel.app/'
            github='https://github.com/maaaashi/speech_to_translate'
          />

          <MiniProject
            title='DrawVariousFigures'
            description='様々な図形をChart.jsを利用して描画するアプリ'
            image='dvfs'
            side='right'
            href='https://draw-various-figures.mss-rep.com/'
            github='https://github.com/maaaashi/draw-various-figures'
          />
        </div>
      </div>
    </div>
  )
}

export default Project
