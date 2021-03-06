import { handleResponse, handleError } from "../../api/apiUtils"
import { bandurl, historyUrl } from "../../api/bandsApis"
import { loadBandsSuccess, loadHistoriesSuccess } from "./ActionTypes"


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




