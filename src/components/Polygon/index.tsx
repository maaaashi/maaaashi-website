import { FC } from 'react'

interface Props {
  sides: number
  radius: number
  centerX: number
  centerY: number
}

const Polygon: FC<Props> = (props) => {
  const { sides, radius, centerX, centerY } = props
  const points = []
  let currentAngle = 0 // 開始角度

  while (currentAngle < 360) {
    const x = centerX + radius * Math.cos((Math.PI * currentAngle) / 180)
    const y = centerY + radius * Math.sin((Math.PI * currentAngle) / 180)
    points.push(x + ',' + y)

    currentAngle += (180 * (sides - 2)) / sides // 次の外角へ
  }

  return (
    <div>
      {points.join(' ')}
      <svg width={2 * centerX} height={2 * centerY}>
        <polygon points={points.join(' ')} fill='gray' />
      </svg>
    </div>
  )
}

export default Polygon
