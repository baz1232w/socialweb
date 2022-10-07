import {usersApi} from "../API/API";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const NEXT_PAGES = 'NEXT-PAGES'
const TOOGLE_FETCHING = 'TOOGLE-FETCHING'
const TOOGLE_FOLLOWING_IS_PROGRESS = 'TOOGLE-FOLLOWING-IS-PROGRESS'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOOGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOOGLE_FOLLOWING_IS_PROGRESS:
            let newState = {
                ...state,
                followingIsProgress: action.isFetching ?
                    [...state.followingIsProgress, action.userId] :
                    state.followingIsProgress.filter(id => id !== action.userId)

            }
            return newState
        default:
            return state
    }
}

export const changePage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

const unFollow = userId => {
    return {
        type: UNFOLLOW,
        userId
    }
}

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

const getTotalUserCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export const nextPages = () => {
    return {
        type: NEXT_PAGES,
    }
}

const setFetching = (isFetching) => {
    return {
        type: TOOGLE_FETCHING,
        isFetching
    }
}

const toogleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOOGLE_FOLLOWING_IS_PROGRESS,
        isFetching,
        userId
    }
}

export const requestUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(setFetching(true))
        dispatch(changePage(currentPage))
            usersApi.getUsers(currentPage,pageSize)
                .then(data => {
                    dispatch(getTotalUserCount(data.totalCount))
                    dispatch(setUsers(data.items))
                    dispatch(setFetching(false))
                })
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true,userId))
        usersApi.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                } else {
                    alert(data.messages)
                    return false
                }
                dispatch(toogleFollowingProgress(false,userId))
            })
    }
}
export const unFollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true,userId))
        usersApi.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(userId))
                } else {
                    alert(data.messages)
                    return false
                }
                dispatch(toogleFollowingProgress(false,userId))
            })
    }
}

export default usersPageReducer