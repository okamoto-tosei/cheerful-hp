import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faClock,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import React from 'react';

export const Footer: NextPage = () => {
  return (
    <section>
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <FontAwesomeIcon className="img i" size="xs" icon={faEnvelope} />
            <h3>our email</h3>
            <p>cheerful@gmail.com</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="img i" icon={faPhone} />
            <h3>our number</h3>
            <p>000-0000-0000</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="img i" icon={faMapMarkerAlt} />
            <h3>business hours</h3>
            <p>open: 9:00am</p>
            <p>close: 18:00pm</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="img i" icon={faClock} />
            <h3>salon location</h3>
            <p>〒634-0812 奈良県橿原市今井町２丁目６−３</p>
          </div>
        </div>
        <div className="credit">&copy; coryright @2022 by cheerful</div>
      </footer>
    </section>
  );
};
