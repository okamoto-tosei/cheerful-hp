import type { NextPage } from 'next';

export const MenuSection: NextPage = () => {
  return (
    <section className="menu" id="menu">
      <div className="heading">
        <img src="facility_main.jpg" alt="" />
        <h3>popular menu</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img className="mask" src="facility_2.jpg" alt="" />
          <h3>黄土よもぎ蒸し</h3>
        </div>

        <div className="box">
          <img className="mask" src="facility_2.jpg" alt="" />
          <h3>ヘッドマッサージ</h3>
        </div>

        <div className="box">
          <img className="mask" src="menu_2.jpg" alt="" />
          <h3>フェイシャル</h3>
        </div>

        <div className="box">
          <img className="mask" src="menu_2.jpg" alt="" />
          <h3>ハンドマッサージ</h3>
        </div>

        <div className="box">
          <img className="mask" src="menu_2.jpg" alt="" />
          <h3>水光注射</h3>
        </div>

        <div className="box">
          <img className="mask" src="menu_2.jpg" alt="" />
          <h3>リフレクソロジー</h3>
        </div>
      </div>
    </section>
  );
};