import type { NextPage } from 'next'

export const FacilitySection: NextPage = () => {
  return (
    <section className="facility">
      <div className="heading">
        <img src="facility_main.jpg" alt="" />
        <h3>our facility</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img className="mask" src="yomogi.jpeg" alt="" />
          <h3>黄土よもぎ蒸し</h3>
          <p>
            有機・無農薬栽培の奈良県産よもぎ使用。
            <br />
            よもぎの香りに癒されながら気持ちの良い汗をかいてスッキリします。
            <br />
            <br />
            (冷え性改善・妊活・温活・ダイエット・更年期・肩こり解消に)身体の芯からポカポカに♪
          </p>
        </div>
        <div className="box">
          <img className="mask" src="aroma_rinpa.jpeg" alt="" />
          <h3>アロマリンパマッサージ</h3>
          <p>
            お客様の体調にあわせたアロマをお選びし、リンパに沿ったオールハンドの温かいマッサージで日常の疲れたお体をゆっくりと癒してください。
          </p>
        </div>
        <div className="box">
          <img className="mask" src="menu_2.jpg" alt="" />
          <h3>フェイシャルエステ</h3>
          <p>お客様のお肌悩みや<br/>お肌の状態に合わせて各コースご用意いたしております。<br/></p>
        </div>
        <div className="box">
          <img className="mask" src="facility_4.jpg" alt="" />
          <h3>落ち着く雰囲気のルーム</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem</p>
        </div>
      </div>
    </section>
  )
}
