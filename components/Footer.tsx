import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import type { NextPage } from 'next'
import React from 'react'
import type { Props as FooterType } from 'pages/index'

type Props = {
  footers: FooterType['footers']
}

export const Footer: NextPage<Props> = ({ footers }) => {
  // NOTE: 配列でデータが渡ってくるが、使用しているのは一つ目だけなのでindexの0番を抽出している
  const footer = footers[0]
  return (
    <section>
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <FontAwesomeIcon className="img i" size="xs" icon={faEnvelope} />
            <h3>our email</h3>
            <p>{footer.email}</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="img i" icon={faPhone} />
            <h3>our number</h3>
            <p>{footer.tel}</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="img i" icon={faMapMarkerAlt} />
            <h3>business hours</h3>
            <p>開店: {footer.open_time}am</p>
            <p>閉店: {footer.close_time}pm</p>
            <p>定休日: 月曜日</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="img i" icon={faClock} />
            <h3>salon location</h3>
            <p>
              〒{footer.post_number} {footer.address}
            </p>
          </div>
        </div>
        <div className="credit">&copy; coryright @2022 by cheerful</div>
      </footer>
    </section>
  )
}
