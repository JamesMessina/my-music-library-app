const bandurl = "https://musicapp17.herokuapp.com/bands"

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




