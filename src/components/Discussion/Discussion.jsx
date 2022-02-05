import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../Commnet/Commnet";
import FullComment from "../FullCommnet/FullComment";
import NewComment from "../NewComment/NewComment";
import { toast } from "react-toastify";
import './discussion.css'

const Discussion = () => {
    
    const [comments,setComments] = useState(null)
    const [submitId,setSubmitId] = useState()
    const [error,setError] = useState(false)

    
    // 1.resolve ---- 2.reject
    useEffect(() =>{
        getComments()
    },[])
    
    async function getComments(){
        try{
            const {data} = await axios.get("http://localhost:3001/comments")
            setComments(data)
        }catch(error){
            setError(true);
        }
    }

    const clickHandler = (id) =>{
        setSubmitId(id)
    }


    // const postCommentHandler = (comment) =>{
    //     axios.post("http://localhost:3001/comments",{...comment,postId:10})
    //     .then((res) => axios.get("http://localhost:3001/comments"))
    //     .then((res) => setComments(res.data))
    //     .catch((err) => console.log(err));
    // }

    const postCommentHandler = async(comment) =>{
        try {
            await axios.post("http://localhost:3001/comments",{...comment,postId:10})
            const {data} =await axios.get("http://localhost:3001/comments")
            setComments(data)
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    

    const renderComment = () =>{
        let renderValue = <p>Loading...</p>
        if(error) {
            renderValue = <p>fetching data failed...</p>
            toast.error("we have an error")
        }
        if(comments && !error){
            renderValue = comments ?  comments.map((c)=> (
                <Comment 
                    key={c.id}
                    name={c.name}
                    email={c.email}
                    onClick={() => clickHandler(c.id)}
                />
            ))
            :(<p>Loading...</p>)
        }
        
        return renderValue;
    }

        
    return (
        <main>
            <section>
                {renderComment()}
            </section>
            <section>
                <FullComment
                    commentId = {submitId}
                    setComments={setComments}
                    setSubmitId={setSubmitId}
                />
            </section>
            <section>
                <NewComment
                    onAddPost = {postCommentHandler}
                />
            </section>
            
        </main>
    );

}
export default Discussion;