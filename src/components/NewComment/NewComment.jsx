
import axios from 'axios';
import { useState } from 'react';
import './newcomment.css'

const NewComment = ({onAddPost}) => {
    
    const [comment,setComment] = useState({
        name:"",
        email:"",
        content:"",
    })
    
    const changeHandler = (e) =>{
        const value = e.target.value;
        setComment({...comment,[e.target.name]:value})
    }

    

    return (
        <div className="newComment">
            <div>
                <label>name</label>
                <input type="text" onChange={changeHandler} name="name"/>
                
            </div>

            <div>
                <label>email</label>
                <input type="email" onChange={changeHandler} name='email'/>
            </div>
            <div>
                <label>body</label>
                <textarea onChange={changeHandler} name='content'/>
            </div>
            <button onClick={() => onAddPost(comment)}>Add new comment</button>
        </div>
    );
}

export default NewComment;