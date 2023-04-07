import type { NextPage } from 'next'

export const AboutSection: NextPage = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src="/about/about.webp" alt="エステの瀬術をしている画像" />
      </div>

      <div className="content">
        <h3>Esthetic salon</h3>

        <div>
          <p>
            はじめまして...当サロンは古都奈良　橿原市今井町(伝統的建造物群)にございます。
            <br />
            最寄駅は八木西口駅を出て赤い橋を渡るとたちまち江戸時代にタイムスリップしたような町並みが広がっております。
            <br />
            メイン通りから一本道を入ったところに赤と白の暖簾がゆれているのが見えるかと思います。当サロンの目印の暖簾が揺れてお客様をお迎えしております♪
            <br />
            当サロンへは忙しい日常から少し離れて、「ゆっくりしたいなぁ癒されたいな」と思ってご来店くださる方が多い、大人女性向けのプライベートサロンです。
          </p>
        </div>

        <p>
          Cheerfulでは、ボディーやフットマッサージはもちろんのこと、奈良県の大宇陀で取れたオーガニックの「よもぎ」を使った
          よもぎ蒸しなどのメニューもあり体の内部から美しくなれるサロンです。
        </p>
        <a href="#menu" className="btn">
          our menu
        </a>
      </div>
    </section>
  )
}
