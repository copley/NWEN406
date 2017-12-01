import { combineReducers } from 'redux'
import {
  sqlNow,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const sqlText = (state = "drop table IF EXISTS company3 ;CREATE TABLE COMPANY3(ID INT PRIMARY KEY     NOT NULL,NAME           TEXT    NOT NULL,AGE            INT     NOT NULL,ADDRESS        CHAR(50),SALARY         REAL,JOIN_DATE	  DATE); INSERT INTO COMPANY3 (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (1, 'Paul', 32, 'California', 20000.00,'2001-07-13');INSERT INTO COMPANY3 (ID,NAME,AGE,ADDRESS,JOIN_DATE) VALUES (2, 'Allen', 25, 'Texas', '2007-12-13');INSERT INTO COMPANY3 (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT );INSERT INTO COMPANY3 (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00, '2007-12-13' ), (5, 'David', 27, 'Texas', 85000.00, '2007-12-13');select * from COMPANY3;", action) => {  
 debugger; switch (action.type) {
   
    case sqlNow:
      return action.actionObj
    default:
      return state
  }
}

const rows = (state = {
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        items: action.rows
      }
    default:
      return state
  }
}

const initState = (state = { }, action) => {
  debugger ;
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.actionObj]: rows(state[action.actionObj], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  initState,
  sqlText
})

export default rootReducer
