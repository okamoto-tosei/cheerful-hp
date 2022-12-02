import React, { FC } from 'react'

type Props = {
  contents: string
}

export const BlogContents: FC<Props> = ({ contents }) => {
  return <div dangerouslySetInnerHTML={{ __html: contents }} />
}
