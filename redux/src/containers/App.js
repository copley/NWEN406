import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded } from '../actions'
import SqlEditor from '../components/SqlEditor'
import Table from '../components/Table'

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
    dispatch(fetchPostsIfNeeded(sqlText))
  }

  render() {
    const { sqlText, rows, isFetching, lastUpdated } = this.props
    const isEmpty = rows.length === 0
    return (
      <div>
        <SqlEditor value={sqlText}
                onChange={this.handleChange}
            />
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
              <Table rows={rows} />
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
    items: rows
  } = postsByReddit[sqlText] || {
    isFetching: true,
    items: []
  }

  return {
    sqlText,
    rows,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)