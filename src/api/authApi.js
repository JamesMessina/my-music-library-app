import { handleResponse, handleError, storeTokenOnLocalStorage } from "./apiUtils"

const authUrlLogin = `${process.env.REACT_APP_API_URL}/auth/login`

export const SignIn = (user) => {
    return fetch(authUrlLogin, {
        method: "POST", 
        headers: { "content-type": "application/json"},
        body: JSON.stringify(user),
    })
    .then(handleResponse)
    .then(storeTokenOnLocalStorage)
    .catch(handleError)
}