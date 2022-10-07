import {profileApi} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET-PROFILE-DATA';
const TOOGLE_FETCHING = 'TOOGLE-FETCHING';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';

const initialState = {
    profile: null,
    posts: [],
    _inputText: '',
    isFetching: true,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    postsText: action.postText,
                    like: 0
                }],
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.profileData
            }
        case TOOGLE_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default :
            return state;
    }
}

export const addPostActionCreator = (postText) => {
    return {type: ADD_POST, postText}
}
const setProfileData = (profileData) =>
    ({type: SET_PROFILE_DATA, profileData})
const setProfileStatus = (status) =>
    ({type: SET_PROFILE_STATUS, status})


export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileApi.getProfileInfo(userId)
            .then(data => {
                dispatch(setProfileData(data))
            })
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(status => dispatch(setProfileStatus(status)))
    }
}

export const changeMyStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                } else {
                    alert(response.data.messages[0])
                }
            })
    }
}
export default profilePageReducer;