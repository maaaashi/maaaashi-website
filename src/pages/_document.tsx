import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
