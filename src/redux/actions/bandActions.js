import { handleResponse, handleError } from "../../api/apiUtils"
import { loadBandsSuccess, loadHistoriesSuccess } from "./ActionTypes"

const bandurl = `${process.env.REACT_APP_API_URL}/bands`
const historyUrl = `${process.env.REACT_APP_API_URL}/bandhistories`

export const fetchBands = () => {
    return(dispatch) => {
        fetch(bandurl)
            .then(handleResponse)
            .then((bandsFromApi) => dispatch(loadBandsSuccess(bandsFromApi)))
            .catch(handleError); 
    }
}

export const fetchHistories = () => {
    return(dispatch) => {
        fetch(historyUrl)
            .then(handleResponse)
            .then((historiesFromApi) => dispatch(loadHistoriesSuccess(historiesFromApi)))
            .catch(handleError);
    }
}




