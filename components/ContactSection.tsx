import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'

export const ContactSection: NextPage = () => {
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  console.log('test')
  console.log('test2')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data: any) => {
    data['form-name'] = 'contact'
    //　　データの送信処理、form-nameをformのnameと合わせる。
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data })
    })
      .then(() => {
        // 成功時の処理
        alert('お問い合わせ内容を送信いたしました。')
        reset()
      })
      .catch((error) => {
        // 失敗時の処理
        alert('お問い合わせ内容の送信に失敗しました。\nお手数ですが、しばらくお時間をあけてから再度お試し下さい。')
      })
  }

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

        <form
          noValidate
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p hidden>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <h3>entry field</h3>
          <input
            type="text"
            {...register('name', { required: true })}
            className="box"
            maxLength={20}
            placeholder="お名前"
          />
          {errors.name && errors.name.type === 'required' && <p style={{ color: 'red' }}>必須項目です。</p>}
          <input
            type="tel"
            {...register('tel', { required: true })}
            className="box"
            maxLength={15}
            placeholder="お電話番号"
          />
          {errors.tel && errors.tel.type === 'required' && <p style={{ color: 'red' }}>必須項目です。</p>}
          <input
            type="email"
            {...register('email', { required: true })}
            className="box email"
            maxLength={30}
            placeholder="メールアドレス"
          />
          {errors.email && errors.email.type === 'required' && <p style={{ color: 'red' }}>必須項目です。</p>}

          <textarea
            className="box"
            {...register('contents', { required: true })}
            maxLength={80}
            placeholder="お問い合わせ内容"
          />
          {errors.contents && errors.contents.type === 'required' && <p style={{ color: 'red' }}>必須項目です。</p>}

          <input type="hidden" name="contact" value="contact" />
          <button className="btn" type="submit" name="send">
            送　信
          </button>
        </form>
      </div>
    </section>
  )
}
