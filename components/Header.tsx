import type { NextPage } from 'next'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header: NextPage = () => {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const isBlogPage = (path: string) => {
    if (router.pathname === '/blog/[id]') {
      return `/${path}`
    }
    return path
  }

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          <FontAwesomeIcon className="img" icon={faLeaf} color="#be9c79" />
        </a>

        <nav className={`navbar ${toggle ? 'active' : ''}`}>
          <Link href={isBlogPage('#home')} passHref>
            <a onClick={() => setToggle((prevState) => !prevState)}>Home</a>
          </Link>
          <Link href={isBlogPage('#about')} passHref>
            <a onClick={() => setToggle((prevState) => !prevState)}>About</a>
          </Link>
          <Link href={isBlogPage('#menu')} passHref>
            <a onClick={() => setToggle((prevState) => !prevState)}>Menu</a>
          </Link>
          <Link href={isBlogPage('#gallery')} passHref>
            <a onClick={() => setToggle((prevState) => !prevState)}>Gallery</a>
          </Link>
          <Link href={isBlogPage('#staff')} passHref>
            <a onClick={() => setToggle((prevState) => !prevState)}>Staff</a>
          </Link>
          <Link href={isBlogPage('#contact')}>
            <a onClick={() => setToggle((prevState) => !prevState)}>Contact</a>
          </Link>
        </nav>

        <div id="menu-btn" onClick={() => setToggle((prevState) => !prevState)}>
          <FontAwesomeIcon className={`${toggle ? 'fa-times' : 'fa-bars'}`} icon={toggle ? faTimes : faBars} />
        </div>
      </section>
    </header>
  )
}
