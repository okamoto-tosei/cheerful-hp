import type { NextPage } from 'next'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export const Header: NextPage = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          <FontAwesomeIcon className="img" icon={faLeaf} color="#be9c79" />
        </a>

        <nav className={`navbar ${toggle ? 'active' : ''}`}>
          <a onClick={() => setToggle((prevState) => !prevState)} href="#home">
            Home
          </a>
          <a onClick={() => setToggle((prevState) => !prevState)} href="#about">
            About
          </a>
          <a onClick={() => setToggle((prevState) => !prevState)} href="#menu">
            Menu
          </a>
          <a onClick={() => setToggle((prevState) => !prevState)} href="#gallery">
            Gallery
          </a>
          <a onClick={() => setToggle((prevState) => !prevState)} href="#staff">
            Staff
          </a>
          <a onClick={() => setToggle((prevState) => !prevState)} href="#contact">
            Contact
          </a>
        </nav>

        <div id="menu-btn" onClick={() => setToggle((prevState) => !prevState)}>
          <FontAwesomeIcon className={`${toggle ? 'fa-times' : 'fa-bars'}`} icon={toggle ? faTimes : faBars} />
        </div>
      </section>
    </header>
  )
}
