import http from "./httpServieces";

export function deleteComment(commentId){
    return http.delete(`/comments/${commentId}`);
}