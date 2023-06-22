import Head from 'next/head'

import { Store } from 'components/logic'

import '../libs/i18n'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Bogdan Rubas - Software Engineer</title>

        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link
          href='https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Store pageProps={pageProps}>
        <div id='modals' />

        <Component {...pageProps} />
      </Store>
    </>
  )
}
