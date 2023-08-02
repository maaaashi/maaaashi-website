import { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { QiitaConvertResponse } from '@/pages/qiita'
import { countAndSort } from '@/libs/countAndSort'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Props {
  articles: QiitaConvertResponse[]
}

const Chart: FC<Props> = ({ articles }) => {
  const options = {
    responsive: true,
  }

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const data = {
    labels,
    datasets: [
      {
        label: '記事投稿数',
        data: labels.map((_, index) => {
          return articles.filter((article) => {
            return index === article.created_at.getMonth()
          }).length
        }),
        backgroundColor: 'rgba(85, 198, 0, 0.5)',
      },
    ],
  }

  const tagCount = countAndSort(
    articles.map((arti) => arti.tags.map((tag) => tag.name)).flat()
  )

  const tag_data = {
    labels: tagCount.map((tag) => Object.keys(tag)[0]),
    datasets: [
      {
        label: 'タグ',
        data: tagCount.map((tag) => Object.values(tag)[0]),
        backgroundColor: 'rgba(85, 198, 0, 0.5)',
      },
    ],
  }

  return (
    <div>
      <h3 className='mb-2 text-lg font-bold'>Data</h3>
      <div className='flex w-full flex-col flex-wrap justify-evenly gap-10 lg:flex-row'>
        <div className='w-full bg-white p-5 lg:w-2/5'>
          <h4 className='font-bold text-black'>月別投稿数</h4>
          <Bar options={options} data={data} />
        </div>
        <div className='w-full bg-white p-5 lg:w-2/5'>
          <h4 className='font-bold text-black'>タグ投稿数</h4>
          <Bar options={options} data={tag_data} />
        </div>
      </div>
    </div>
  )
}

export default Chart
