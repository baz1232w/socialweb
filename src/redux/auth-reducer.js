import {authApi, profileApi} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    user: null,
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

const setUserData = (userId, login, email,isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, login, email,isAuth}
    }
}

export const authMe = () => (dispatch) => {
    return authApi.authMe()
        .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, login, email,true))
                    return id
                }
            }
        )
}

export const loginMe = (body) => {
    return (dispatch) => {
        authApi.loginMe(body)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authMe())
                } else {
                    let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Email or Password is incorrect'
                    dispatch(stopSubmit('login', {_error: errorMessage}))
                }
            })
    }
}

export const logOutMe = () => {
    return (dispatch) => {
        authApi.logOutMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null))
                }
            })
    }
}

export default authReducer