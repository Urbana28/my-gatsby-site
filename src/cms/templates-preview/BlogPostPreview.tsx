import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/BlogPost'

type BlogPostPreviewProps = {
    entry: any, widgetFor: any
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default BlogPostPreview