import { AboutSection } from 'components/AboutSection'
import { ContactSection } from 'components/ContactSection'
import { FacilitySection } from 'components/FacilitySection'
import { GallerySection } from 'components/GallerlySection'
import { HomeSection } from 'components/HomeSection'
import { MenuSection } from 'components/MenuSection'
import { StaffSection } from 'components/StaffSection'
import type { GetServerSideProps, NextPage } from 'next'
import React, { Key } from 'react'
import { supabase } from 'lib/supabase'
import { Footer } from 'components/Footer'
import { client } from 'microCMS'
import { BlogContents } from 'components/BlogContents'
import GoogleMap from 'components/GoogleMap'

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
  blogs: {
    contents: {
      category: {
        createdAt: Date
        id: string
        name: string
        publishedAt: Date
        revisedAt: Date
        updatedAt: Date
      }
      content: string
      createdAt: string
      eyecatch: {
        height: number
        url: string
        width: number
      }
      id: Key
      publishedAt: Date
      revisedAt: Date
      title: string
      updatedAt: Date
    }[]
    limit: number
    offset: number
    totalCount: number
  }
}

const Home: NextPage<Props> = ({ menus, footers, blogs }) => {
  return (
    <article>
      <HomeSection />
      <AboutSection />
      {blogs.contents.length > 0 ? <BlogContents contents={blogs.contents} /> : null}
      <FacilitySection />
      <MenuSection menus={menus} />
      <GallerySection />
      <StaffSection />
      <ContactSection />
      <GoogleMap />
      <Footer footers={footers} />
    </article>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  // NOTE: supabase Data取得
  const { data: menus } = await supabase.from('menu').select('*')
  const { data: footers } = await supabase.from('footer').select('*')

  // microCMSのブログデータ取得 (5件取得)
  const blogs = await client.get({ endpoint: 'blogs', queries: { limit: 5, orders: 'publishedAt' } }).then((res) => res)

  return {
    props: {
      menus,
      footers,
      blogs
    }
  }
}
