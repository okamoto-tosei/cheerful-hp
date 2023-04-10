import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>

          {/* seo */}
          <meta
            content="奈良県橿原市今井町にあるエステサロンです。オーガニックのよもぎを使用した、よもぎ蒸しやボディーマッサージなどがおすすめ。水光注射など流行りのメニューなどもあり、お客様を内側からしっかりと美しくなれるようにいたします。近鉄八木西口駅から徒歩5分程度の距離にあり駐車場も完備していますので、お車での来店も可能です。"
            name="description"
          ></meta>
          {/* ogp */}
          <meta
            property="og:title"
            content="
          エステサロン　ちあふる"
          />
          <meta
            property="og:description"
            content="奈良県橿原市今井町にあるエステサロンです。オーガニックのよもぎを使用した、よもぎ蒸しやボディーマッサージなどがおすすめ。水光注射など流行りのメニューなどもあり、お客様を内側からしっかりと美しくなれるようにいたします。近鉄八木西口駅から徒歩5分程度の距離にあり駐車場も完備していますので、お車での来店も可能です。"
          />
          <meta property="og:type" content="TOPページ" />
          <meta property="og:url" content="https://cheerful-imai.com/" />
          <meta
            property="og:image"
            content="https://imgbp.hotp.jp/CSP/IMG_SRC_K/72/29/C025887229/C025887229_219-164.jpg"
          />
          <meta property="og:site_name" content="ちあふる" />
          <meta property="og:locale" content="ja_JP" />

          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="keywords"
            content="cheerful,ちあふる,エステサロン,奈良県,橿原市,今井町,奈良県橿原市今井町,よもぎ,蓬,水光注射"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
