import { FC } from 'react'
import Polygon from '@/components/Polygon'

const App = () => {
  return (
    <div>
      <Polygon sides={2.5} radius={100} centerX={100} centerY={100} />
    </div>
  )
}

export default App
