
export const user = (state = {}, action) => {
    switch(action.type) {
        case "SIGN_IN_USER_SUCCESS" : 
            console.log(action.value)
            return action.value 
            
        default: 
            return state 
    }
}