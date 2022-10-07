import {authMe} from "./auth-reducer";

const GET_INITIALIZED = 'GET-INITIALIZED'

const initialState = {
    initialized: false

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}


const initializingSuccessed = () => ({type: GET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authMe())
        Promise.all([promise]).then(()=>{
            dispatch(initializingSuccessed())
        }
    )
    }

}


export default appReducer