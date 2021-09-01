
export const user = (state = {}, action) => {
    switch(action.type) {
        case "SIGN_IN_USER_SUCCESS" : 
            return action.value 
        default: 
            return state 
    }
}