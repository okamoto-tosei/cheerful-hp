import type { NextPage } from 'next'

export const MenuSection: NextPage = () => {
  return (
    <section className="menu" id="menu">
      <div className="heading">
        <img src="facility_main.jpg" alt="popular menu" />
        <h3>popular menu</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img className="mask" src="facility_2.jpg" alt="黄土よもぎ蒸し" />
          <h3>黄土よもぎ蒸し</h3>
          <p>price: ¥3,850(税込)</p>
          <p>time: 40分</p>
        </div>

        <div className="box">
          <img className="mask" src="/noImage/noimg01.gif" alt="天使のゆるりヘッドマッサージ" />
          <h3>天使のゆるりヘッドマッサージ</h3>
          <p>price: ¥4,000(税込)</p>
          <p>time: 20分</p>
        </div>

        <div className="box">
          <img className="mask" src="menu_2.jpg" alt="毛穴ケア・フェイシャル" />
          <h3>毛穴ケア・フェイシャル</h3>
          <p>price: ¥12,800(税込)</p>
          <p>time: 40分</p>
        </div>

        <div className="box">
          <img className="mask" src="/noImage/noimg01.gif" alt="オールハンド・アロマリンパマッサージ" />
          <h3>オールハンド・アロマリンパマッサージ</h3>
          <p>price: ¥8,500(税込)</p>
          <p>time: 60分</p>
        </div>

        <div className="box">
          <img className="mask" src="/noImage/noimg01.gif" alt="水光エステ" />
          <h3>水光エステ</h3>
          <p>price: ¥22,000(税込)</p>
          <p>time: 60分</p>
        </div>

        <div className="box">
          <img className="mask" src="/noImage/noimg01.gif" alt="足裏・リフレクソロジー" />
          <h3>足裏・リフレクソロジー</h3>
          <p>price: ¥4,000(税込)</p>
          <p>time: 20分</p>
        </div>
      </div>
    </section>
  )
}
