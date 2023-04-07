import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Header } from 'components/Header'
import Head from 'next/head'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>cheerful - エステサロン -</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
