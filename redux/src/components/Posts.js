import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => (
  <table style={{color: "green"}}><tbody>
    {posts.map((post, i) =>
      <tr key={i}><td>{post.row}</td></tr>
    )}
   </tbody></table>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
