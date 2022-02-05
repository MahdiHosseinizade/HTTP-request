import http from "./httpServieces";

export function getOneComment(commentId){
    return http.get(`./comments/${commentId}`)
}