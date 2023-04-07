import React, { FC } from 'react'
import type { Props as Blog } from 'pages/index'
import dayjs from 'dayjs'
import { timeFormat } from 'utils/time'
import Link from 'next/link'

type Props = {
  contents: Blog['blogs']['contents']
}

export const BlogContents: FC<Props> = ({ contents }) => {
  return (
    <section className="blog" id="blog">
      <div className="content">
        <div className="heading">
          <img src="/common/feather.webp" alt="" />
          <h3>Blog</h3>
        </div>
        <div className="blog-container">
          <div className="text">
            {contents.map(({ id, title, createdAt }) => {
              const date = dayjs(createdAt)
              const createTime = timeFormat.YYYY_MM_DD(date)
              return (
                <Link key={id} href={`/blog/${id}`} passHref>
                  <p>
                    {createTime}&emsp;<span className="blog_title">{title}</span>
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
