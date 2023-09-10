import MiniProject from '@/components/MiniProject'

export type ProjectType = {
  title: string
  description: string
  image: 'open' | 'website' | 'stt' | 'dvfs' | 'reversi' | 'imageGenerator'
  href: string
  qiita?: string
  github?: string
}

const Project = () => {
  const projects: ProjectType[] = [
    {
      title: '感想文生成ジェネレーター',
      description: '設定から、感想文を自動生成するツール',
      image: 'open',
      href: 'https://opinion-ai.vercel.app/',
      github: 'https://github.com/maaaashi/opinion-ai',
      qiita: 'https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe',
    },
    {
      title: `Maaaashi's website`,
      description: '自分のプロフィールや投稿記事を紹介するサイト(このサイト)',
      image: 'website',
      href: 'https://maaaashi-website.mss-rep.com',
      github: 'https://github.com/maaaashi/maaaashi-website',
    },
    {
      title: 'SpeachToTranslate',
      description:
        'AzureSTTを利用し、音声からテキスト変換し、DeepL翻訳をするアプリ',
      image: 'stt',
      href: 'https://speech-to-translate.vercel.app/',
      github: 'https://github.com/maaaashi/speech_to_translate',
    },
    {
      title: 'DrawVariousFigures',
      description: '様々な図形をChart.jsを利用して描画するアプリ',
      image: 'dvfs',
      href: 'https://draw-various-figures.mss-rep.com/',
      github: 'https://github.com/maaaashi/draw-various-figures',
    },
    {
      title: 'ChatGPT Reversi',
      description: 'ChatGPTとリバーシ',
      image: 'reversi',
      href: 'https://chatgpt-reversi.mss-rep.com/',
      github: 'https://github.com/maaaashi/ReversiWithChatGPT',
      qiita: 'https://qiita.com/maaaashi/items/50d9976407abed742031',
    },
    {
      title: "Maaaashi's Image Generator",
      description: 'プロンプトから画像生成',
      image: 'imageGenerator',
      href: 'https://image-generator.mss-rep.com/',
      github: 'https://github.com/maaaashi/image-generator',
    },
  ]
  return (
    <div className='container mx-auto flex-1 overflow-y-auto bg-base-200 p-5'>
      <div className='h-full p-5'>
        <h2 className='text-2xl font-bold'>Mini Project</h2>
        <p>学習で個人的に作成したプロジェクトです。</p>

        <div className='flex flex-col gap-5'>
          {projects.map((project, index) => (
            <MiniProject project={project} key={index} number={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
