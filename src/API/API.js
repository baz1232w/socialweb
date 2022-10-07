import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "8772f30d-0b65-435b-bb89-1b7144d88bb0",
    }
})

export const usersApi = {

    getUsers(page = 1, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unFollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
}

export const authApi = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    loginMe(body) {
        return instance.post('/auth/login', {...body,captcha:true})
            .then(response => response.data)
    },

    logOutMe(){
        return instance.delete('/auth/login')
            .then(response=>response.data)
    }

}

export const profileApi = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}