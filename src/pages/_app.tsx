import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import css from '../styles/index.module.css'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-DK3HKFBE3B'
      ></Script>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-DK3HKFBE3B");
        `,
        }}
      ></Script>
      <div className={`${css.main} container mx-auto`}>
        <div className='h-full bg-base-200 p-5'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
