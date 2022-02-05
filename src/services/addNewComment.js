import http from "./httpServieces";

export function addNewComment(data){
    return http.post("/comments",data)
}