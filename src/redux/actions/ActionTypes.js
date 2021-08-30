export const loadBandsSuccess = (bands) => {
    const bandAction = {
        type: 'FETCH_BANDS_SUCCESS',
        value: bands
    }
    console.log(bands)
    return(bandAction)
}

export const loadHistoriesSuccess = (histories) => {
    const historyAction = {
        type: 'FETCH_HISTORIES_SUCCESS',
        value: histories
    }
    console.log(histories)
    return(historyAction)
}