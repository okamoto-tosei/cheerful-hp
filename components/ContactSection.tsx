import type { NextPage } from 'next';

export const ContactSection: NextPage = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <img src="facility_main.jpg" alt="" />
        <h3>contact us</h3>
      </div>

      <div className="row">
        <div className="image">
          <img src="contact-img.svg" alt="" />
        </div>

        <form>
          <h3>book a table</h3>
          <input
            type="text"
            name="name"
            required
            className="box"
            maxLength={20}
            placeholder="お名前"
          />
          <input
            type="tel"
            name="tel"
            className="box"
            required
            maxLength={15}
            placeholder="お電話番号"
          />
          <input
            type="email"
            name="email"
            className="box"
            required
            maxLength={15}
            placeholder="メールアドレス"
          />

          <textarea
            name="contents"
            className="box"
            required
            maxLength={15}
            placeholder=" 希望日時と時間、施術内容をお書きください。
            &#10;（例：24日17時からフェイシャル希望）"
          />

          <button className="btn" type="submit" name="send">
            送　信
          </button>
        </form>
      </div>
    </section>
  );
};
