import * as authApi from "../../api/authApi"
import { signInUserSuccess } from './ActionTypes'

export function signInUser(user) {
    return function(dispatch) {
        return authApi
            .signIn(user)
            .then((userAccount) => dispatch(signInUserSuccess(userAccount)))
            .catch((error) => console.log(error)); 
    }
}