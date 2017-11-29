export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const sqlNow = 'sqlNow'

export const sqlNowAction = actionObj => ({
  type: sqlNow,
  actionObj
})



export const requestPosts = actionObj => ({
  type: REQUEST_POSTS,
  actionObj
})

export const receivePosts = (actionObj, json) => ({
  type: RECEIVE_POSTS,
  actionObj,
  rows: JSON.parse(json),
  receivedAt: Date.now()
})

const fetchPosts = actionObj => dispatch => {
  dispatch(requestPosts(actionObj)) ;   debugger ;
  let requestObj = {} ; requestObj.sqlStatement = actionObj ; 
  return fetch("http://35.163.140.165:8000/api/todo/PostToFlask", {
    method: 'post',
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(requestObj)
  })
  .then(response => response.json())
  .then(json => dispatch(receivePosts(actionObj, json)))
    
    
}


export const fetchPostsIfNeeded = actionObj => (dispatch, getState) => {
  
    return dispatch(fetchPosts(actionObj))

}