import { handleResponse, handleError } from "../../api/apiUtils"
import { authUrlLogin } from "../../api/authApi"

export const SignIn = (user) => {
    return(dispatch) => {
        fetch(authUrlLogin, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
        .then(handleResponse)
    }
}