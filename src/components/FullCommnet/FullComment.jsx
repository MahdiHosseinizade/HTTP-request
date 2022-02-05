

import axios from 'axios';
import { useEffect, useState } from 'react';
import './fullcommnet.css';

const FullComment = ({commentId,setComments,setSubmitId}) => {
    
    const [comment,setComment] = useState(null);
    
    useEffect(() =>{
        if(commentId){
            axios.get(`http://localhost:3001/comments/${commentId}`)
            .then((res) => setComment(res.data))
            .catch((error) => console.log(error))
        }
    },[commentId])
    

    // const deleteHandler = () =>{
    //     axios.delete(`http://localhost:3001/comments/${commentId}`)
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err))
    // }

    const deleteCommentHandler = async() =>{
        try {
            await axios.delete(`http://localhost:3001/comments/${commentId}`)
            const {data} =await axios.get("http://localhost:3001/comments")
            setComments(data)
            setComment(null)
            setSubmitId(null)
        } catch (error) {
            console.log(error);
        }
    }


    let commentDetail = <p>Please select an item</p>
    if(commentId) commentDetail = <p>Loading...</p>
    if(comment){
        commentDetail = (
            <div className='fullComment'>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <button className='delete' onClick={deleteCommentHandler}>Delete</button>
            </div>
        )
    }

    return commentDetail ;
    
}

export default FullComment;