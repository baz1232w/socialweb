import {createSelector} from "reselect";

export const getUsers = state => state.usersPage.users
export const getDefaultPhoto = state => state.usersPage.defaultPhoto
export const getPageSize = state => state.usersPage.pageSize
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getCurrentPage = state => state.usersPage.currentPage
export const getIsFetching = state => state.usersPage.isFetching
export const getFollowingIsProgress = state => state.usersPage.followingIsProgress
