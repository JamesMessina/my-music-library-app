import * as authApi from "../../api/authApi"
import { signInUserSuccess } from './ActionTypes/'

export const signInUser = (user) => {
    return function(dispatch) {
        return authApi
            .SignIn(user)
            .then((userAccount) => dispatch(signInUserSuccess(userAccount)))
            .catch((error) => console.log(error)); 
    }
}