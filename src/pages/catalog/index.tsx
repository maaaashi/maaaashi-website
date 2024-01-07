import { CatalogCard } from '@/components/CatalogCard'
import { Catalog } from '@/domain/Catalog'
import React from 'react'
import open from './images/opinionAi.png'
import website from './images/website.png'
import dvfs from './images/DrawVariousFigures.png'
import stt from './images/stt.png'
import reversi from './images/website.png'
import imageGenerator from './images/ImageGenerator.png'
import cookingAssistant from './images/cookingAssistant.png'

const index = () => {
  const catalogs = [
    new Catalog(
      '感想文生成ジェネレーター',
      '設定から、感想文を自動生成するツール',
      'https://opinion-ai.vercel.app/',
      open,
      'https://github.com/maaaashi/opinion-ai',
      'https://qiita.com/maaaashi/items/cbc06263c51ab64e5dbe'
    ),
    new Catalog(
      "Maaaashi's website",
      '自分のプロフィールや投稿記事を紹介するサイト(This Site)',
      'https://maaaashi-website.mss-rep.com',
      website,
      'https://github.com/maaaashi/maaaashi-website'
    ),
    new Catalog(
      'SpeachToTranslate',
      'AzureSTTを利用し、音声からテキスト変換し、DeepL翻訳をするアプリ',
      'https://speech-to-translate.vercel.app/',
      stt,
      'https://github.com/maaaashi/speech_to_translate'
    ),
    new Catalog(
      'DrawVariousFigures',
      '様々な図形をChart.jsを利用して描画するアプリ',
      'https://draw-various-figures.mss-rep.com/',
      dvfs,
      'https://github.com/maaaashi/draw-various-figures'
    ),
    new Catalog(
      'ChatGPT Reversi',
      'ChatGPTとリバーシ',
      'https://chatgpt-reversi.mss-rep.com/',
      reversi,
      'https://github.com/maaaashi/ReversiWithChatGPT',
      'https://qiita.com/maaaashi/items/50d9976407abed742031'
    ),
    new Catalog(
      "Maaaashi's Image Generator",
      'プロンプトから画像生成',
      'https://image-generator.mss-rep.com/',
      imageGenerator,
      'https://github.com/maaaashi/image-generator'
    ),
    new Catalog(
      "Maaaashi's Cooking Assistant",
      'ChatGPTが料理のレシピとイメージ画像を生成',
      'https://cooking-assistant.mss-rep.com/',
      cookingAssistant,
      'https://github.com/maaaashi/cooking-assistant',
      'https://qiita.com/maaaashi/items/43210e781f657777fe56'
    ),
  ]
  return (
    <div className='container mx-auto flex h-full flex-wrap gap-2 overflow-auto'>
      {catalogs.map((catalog, index) => (
        <CatalogCard catalog={catalog} key={index} />
      ))}
    </div>
  )
}

export default index
