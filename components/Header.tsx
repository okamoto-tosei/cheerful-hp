import type { NextPage } from 'next';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Header: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          <FontAwesomeIcon className="img" icon={faLeaf} color="#be9c79" />
        </a>

        <nav className={`navbar ${toggle ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#staff">Staff</a>
          <a href="#contact">Contact</a>
        </nav>

        <div id="menu-btn" onClick={toggleButton}>
          <FontAwesomeIcon
            className={`${toggle ? 'fa-times' : 'fa-bars'}`}
            icon={toggle ? faTimes : faBars}
          />
        </div>
      </section>
    </header>
  );
};
