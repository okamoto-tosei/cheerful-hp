import { AboutSection } from 'components/AboutSection'
import { ContactSection } from 'components/ContactSection'
import { FacilitySection } from 'components/FacilitySection'
import { GallerySection } from 'components/GallerlySection'
import { HomeSection } from 'components/HomeSection'
import { MenuSection } from 'components/MenuSection'
import { StaffSection } from 'components/StaffSection'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <article>
      <HomeSection />
      <AboutSection />
      <FacilitySection />
      <MenuSection />
      <GallerySection />
      <StaffSection />
      <ContactSection />
    </article>
  )
}

export default Home
