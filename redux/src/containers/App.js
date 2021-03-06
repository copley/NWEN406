import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sqlNowAction, fetchPostsIfNeeded } from '../actions'
import SqlEditor from '../components/SqlEditor'
import Table from '../components/Table'
import logo from '../logo.svg';
import '../app.css';
class App extends Component {
  static propTypes = {
    sqlText: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
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

  handleChange = nextOBJ => {
    debugger; this.props.dispatch(sqlNowAction(nextOBJ))
  }

  handleRefreshClick = e => {
    e.preventDefault()
     debugger ;
    const { dispatch, sqlText } = this.props
    dispatch(fetchPostsIfNeeded(sqlText))
  }

  render() {
    const { sqlText, rows } = this.props
   
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      
        <h1 style={{color: 'blue'}}><a href="https://github.com/AdrianNg/NWEN406/tree/master/redux" target="_blank">React SQL lab Source code Repo</a></h1> 
        <SqlEditor value={sqlText}
                onChange={this.handleChange}
            />
        <p>
  
            <button onClick={this.handleRefreshClick}>
              Submit query to PostgreSQL
            </button>
          
        </p>
      
            <div style={{ opacity: 1 }}>
              <Table rows={rows} />
            </div>
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { sqlText, initState } = state
  const {
    items: rows
  } = initState[sqlText] || {
    items: []
  }

  return {
    sqlText,
    rows
  }
}

export default connect(mapStateToProps)(App)