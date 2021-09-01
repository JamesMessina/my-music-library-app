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

export const signInUserSuccess = (user) => {
    const signInAction = {
        type: "SIGN_IN_USER_SUCCESS",
        value: user
    }
    console.log(user)
    return(signInAction)
}