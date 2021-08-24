//import { handleResponse } from "../api/apiUtils"

const bandurl = `${process.env.REACT_APP_API_URL}/bands`
const historyUrl = `${process.env.REACT_APP_API_URL}/bandhistories`

export const fetchBands = () => {
    return(dispatch) => {
        fetch(bandurl)
            .then(res => res.json())
            .then(bands =>{
                const bandAction = {
                    type: 'FETCH_BANDS',
                    value: bands
                }
                console.log(bands)
                dispatch(bandAction)
            })
            .catch(error =>{
                console.log(`API call failed:${error}`)
            })
    }
}

export const fetchHistories = () => {
    return(dispatch) => {
        fetch(historyUrl)
            .then(res => res.json())
            .then(histories =>{
                const historyAction = {
                    type: 'FETCH_HISTORIES',
                    value: histories
                }
                console.log(histories)
                dispatch(historyAction)
            })
            .catch(error =>{
                console.log(`API call failed:${error}`)
            })
    }
}




