import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex h-screen flex-col overflow-y-auto'>
      <Head>
        <title>{"Maaaashi's Website"}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <div className='container mx-auto flex-1 p-5'>
        <div className='h-full bg-base-200 p-5'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}
