import http from "./httpServieces";

export function addNewComment(data){
    const token = "SECURE TOKEN"
    const header = {
        headers:{
            Autherization :`Bearer ${token}`
        }
    }
    return http.post("/comments",data,header)
}