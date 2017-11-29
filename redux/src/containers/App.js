import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
  static propTypes = {
    sqlText: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, sqlText } = this.props
   // dispatch(fetchPostsIfNeeded(sqlText))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sqlText !== this.props.sqlText) {
      const { dispatch, sqlText } = nextProps
     // dispatch(fetchPostsIfNeeded(sqlText))
    }
  }

  handleChange = nextReddit => {
     this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, sqlText } = this.props
    dispatch(invalidateReddit(sqlText))
    dispatch(fetchPostsIfNeeded(sqlText))
  }

  render() {
    const { sqlText, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={sqlText}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          
            <button onClick={this.handleRefreshClick}>
              Submit query to PostgreSQL
            </button>
          
        </p>
      
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { sqlText, postsByReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[sqlText] || {
    isFetching: true,
    items: []
  }

  return {
    sqlText,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)