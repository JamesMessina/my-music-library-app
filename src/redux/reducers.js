import { combineReducers } from 'redux'

const bands = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BANDS' :
            return action.value
        default:
            return state
      }
}

const histories = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_HISTORIES' :
            return action.value
        default: 
            return state
    }
}



export default combineReducers({ bands, histories })