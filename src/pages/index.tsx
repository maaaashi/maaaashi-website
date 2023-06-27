import rep from '@/libs/images/rep.jpg'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      HOME
      <Image src={rep} className='mask mask-circle' alt='Maaashi' />
    </div>
  )
}
