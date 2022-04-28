import type { NextPage } from 'next';

export const AboutSection: NextPage = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src="about.jpg" alt="エステの瀬術をしている画像" />
      </div>

      <div className="content">
        <h3>Esthetic salon</h3>
        <p>
          Cheerfulでは、ボディーやフットマッサージはもちろんのこと、奈良県の大宇陀で取れたオーガニックの「よもぎ」を使った
          よもぎ蒸しなどのメニューもあり体の内部から美しくなれるサロンです。
        </p>
        <a href="#menu" className="btn">
          our menu
        </a>
      </div>
    </section>
  );
};
