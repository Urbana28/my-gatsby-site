import React from 'react'
import PropTypes from 'prop-types'
import BlogPostTemplate from '../../templates/BlogPost'


type BlogPostPreviewProps = {
    entry: any, widgetFor: any
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      data={null}
      // //content={widgetFor('body')}
      // description={entry.getIn(['data', 'description'])}
      // image={entry.getIn(['data', 'image'])}
      // title={entry.getIn(['data', 'title'])}
    />
  )
}

export default BlogPostPreview