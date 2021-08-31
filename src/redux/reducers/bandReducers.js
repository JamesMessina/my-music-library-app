
export const bands = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BANDS_SUCCESS' :
            return action.value
        default:
            return state
      }
}

export const histories = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_HISTORIES_SUCCESS' :
            return action.value
        default: 
            return state
    }
}



