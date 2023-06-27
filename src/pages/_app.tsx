import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import css from '../styles/index.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={`${css.main} container mx-auto`}>
        <div className='h-full bg-base-200 p-5'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
