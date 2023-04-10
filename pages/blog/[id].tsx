import { Footer } from 'components/Footer'
import dayjs from 'dayjs'
import { supabase } from 'lib/supabase'
import { client } from 'microCMS'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Props } from 'pages/index'
import { timeFormat } from 'utils/time'
import sanitize from 'sanitize-html'

type BlogProps = {
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
  id: string
  publishedAt: Date
  revisedAt: Date
  title: string
  updatedAt: Date
}
const Blog: NextPage<{ blog: BlogProps } & Props> = ({ blog, footers }) => {
  const date = dayjs(blog.createdAt)
  const createTime = timeFormat.YYYY_MM_DD(date)
  const sanitizedHTML = sanitize(blog.content)
  return (
    <article className="blog_page">
      <section>
        <h1 className="blog_title">{blog.title}</h1>
        <p className="create_time">作成日:&emsp;{createTime}</p>
        <div>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </div>
      </section>
      <Footer footers={footers} />
    </article>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await client.get({ endpoint: 'blogs', contentId: String(params?.id) }).then((res) => res)
  const { data: footers } = await supabase.from('footer').select('*')
  return {
    props: { blog, footers }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents } = await client
    .get<{ contents: { id: string }[] }>({
      endpoint: 'blogs',
      queries: { limit: 5, orders: 'publishedAt', fields: 'id' }
    })
    .then((res) => res)
  const contentIds = contents.map((content) => {
    return {
      params: { id: content.id }
    }
  })

  return {
    paths: contentIds,
    fallback: 'blocking'
  }
}
