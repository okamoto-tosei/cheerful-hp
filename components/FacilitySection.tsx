import type { NextPage } from 'next';

export const FacilitySection: NextPage = () => {
  return (
    <section className="facility">
      <div className="heading">
        <img src="facility_main.jpg" alt="" />
        <h3>our facility</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img className="mask" src="facility_1.jpg" alt="" />
          <h3>デトックス効果　よもぎ</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem</p>
        </div>
        <div className="box">
          <img className="mask" src="facility_2.jpg" alt="" />
          <h3>よもぎ蒸し</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem</p>
        </div>
        <div className="box">
          <img className="mask" src="facility_3.jpg" alt="" />
          <h3>よもぎ蒸し瓶</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem</p>
        </div>
        <div className="box">
          <img className="mask" src="facility_4.jpg" alt="" />
          <h3>落ち着く雰囲気のルーム</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem</p>
        </div>
      </div>
    </section>
  );
};
