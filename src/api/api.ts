import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '40a390b0-9c6e-42e4-b458-b06320b26560'
    },
})


export const userApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileApi.getProfile(userId)
    },


}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}



type LoginDataType={
    email:string
    password:string
    rememberMe:boolean
}
export const authApi = {

    me() {
        return instance.get(`auth/me`,)
    },
    login(data:LoginDataType) {
        return instance.post(`auth/login`,data)
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}






