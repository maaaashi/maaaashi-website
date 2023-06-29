import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const url = process.env.NEXT_PUBLIC_QIITA_URL!
  const apiKey = process.env.NEXT_PUBLIC_QIITA_APIKEY!

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
  const articles = await response.json()

  res.status(200).json(articles)
}
