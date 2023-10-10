import axios from "axios";
import {GetProfileResponseType} from "../redux/profileReducer";
import {UserType} from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '40a390b0-9c6e-42e4-b458-b06320b26560'
    },
})


export const userApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    follow(userId: number) {
        return instance.post<BaseResponseType>(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete<BaseResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileApi.getProfile(userId)
    },


}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<BaseResponseType>(`profile/status/`, {status: status})
    },
    updatePhoto(photo: File) {
        const formData=new FormData()
        formData.append('image',photo)
        return instance.put<BaseResponseType<ResPhotoType>>(`profile/photo/`, formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile(profile:GetProfileResponseType){
        return instance.put(`profile`, profile)
    }
}



type LoginDataType={
    email:string
    password:string
    rememberMe:boolean
    captchaURL?:string
}
export const authApi = {

    me() {
        return instance.get<BaseResponseType<AuthDataType>>(`auth/me`,)
    },
    login(data:LoginDataType) {

        return instance.post<BaseResponseType<{userId?:number}>>(`auth/login`,data)
    },
    logOut() {
        return instance.delete<BaseResponseType<{userId?:number}>>(`auth/login`)
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<CaptchaResType>(`security/get-captcha-url`,)
    },

}



export type BaseResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    data: D;
};

type UsersDataType = {
    items: UserType[]
    totalCount: number
}
type CaptchaResType = { url: string }

type ResPhotoType = {
    photos: {
        small: string
        large: string
    }
}
type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}




