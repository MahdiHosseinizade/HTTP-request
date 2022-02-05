import http from "./httpServieces";

export function getAllComments() {
    return http.get("/comments")
}

