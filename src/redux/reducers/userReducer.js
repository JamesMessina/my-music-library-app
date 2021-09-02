
export const user = (
    state = {
            isAuthUser: !!localStorage.getItem("user"),
            user: localStorage.getItem("user") || {},
        },
    action) => {
    switch(action.type) {
        case "SIGN_IN_USER_SUCCESS" : 
        console.log({...state, isAuthUser: true, user: action.value.username})
            return {...state, isAuthUser: true, user: action.value.username}
            
        default: 
            return state 
    }
}