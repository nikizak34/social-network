import axios from "axios";


const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'40a390b0-9c6e-42e4-b458-b06320b26560'
    },
})

export const getUsers=(currentPage:number=1,pageSize:number=10)=>{
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
}
