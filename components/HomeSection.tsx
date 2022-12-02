import type { NextPage } from 'next'

export const HomeSection: NextPage = () => {
  return (
    <div className="home-bg">
      <section className="home" id="home">
        <div className="content">
          <h3>ちあふる</h3>
          <p>
            近鉄八木西口駅より徒歩5分の距離にある美と健康を非日常的な癒やしの空間を体感していただけるエステサロンです。
            <br />
            駐車場も近くにありますのでお車での来店も可能です。
          </p>
          <a href="#about" className="btn">
            about us
          </a>
        </div>
      </section>
    </div>
  )
}
