import { AboutSection } from 'components/AboutSection'
import { ContactSection } from 'components/ContactSection'
import { FacilitySection } from 'components/FacilitySection'
import { GallerySection } from 'components/GallerlySection'
import { HomeSection } from 'components/HomeSection'
import { MenuSection } from 'components/MenuSection'
import { StaffSection } from 'components/StaffSection'
import type { NextPage } from 'next'
import React from 'react'
import { supabase } from 'lib/supabase'
import { Footer } from 'components/Footer'

export type Props = {
  menus: {
    id: number
    created_at: Date
    name: string
    price: number
    time: string
    img_key: number
    is_img: boolean
  }[]
  footers: {
    id: number
    created_at: Date
    email: string
    tel: string
    open_time: string
    close_time: string
    post_number: string
    address: string
  }[]
}

const Home: NextPage<Props> = ({ menus, footers }) => {
  return (
    <article>
      <HomeSection />
      <AboutSection />
      <FacilitySection />
      <MenuSection menus={menus} />
      <GallerySection />
      <StaffSection />
      <ContactSection />
      <Footer footers={footers} />
    </article>
  )
}

export default Home

export async function getStaticProps() {
  let { data: menus } = await supabase.from('menu').select('*')
  let { data: footers } = await supabase.from('footer').select('*')

  return {
    props: {
      menus,
      footers
    }
  }
}
