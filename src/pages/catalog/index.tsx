import { CatalogCard } from '@/components/CatalogCard'
import { Catalog } from '@/domain/Catalog'
import React from 'react'
import open from './opinionAi.png'

const index = () => {
  const catalog = new Catalog(
    '感想文生成ジェネレーター',
    '設定から、感想文を自動生成するツール',
    'https://opinion-ai.vercel.app/',
    open
  )
  return (
    <div>
      <CatalogCard catalog={catalog} />
    </div>
  )
}

export default index
