export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const selectReddit = reddit => ({
  type: SELECT_REDDIT,
  reddit
})



export const requestPosts = reddit => ({
  type: REQUEST_POSTS,
  reddit
})

export const receivePosts = (reddit, json) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: JSON.parse(json),
  receivedAt: Date.now()
})

const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit)) ;   debugger ;
  let requestObj = {} ; requestObj.sqlStatement = reddit ; 
  return fetch("http://35.163.140.165:8000/api/todo/PostToFlask", {
    method: 'post',
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(requestObj)
  })
  .then(response => response.json())
  .then(json => dispatch(receivePosts(reddit, json)))
    
    
}


export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
  //if (shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit))
  //}
}