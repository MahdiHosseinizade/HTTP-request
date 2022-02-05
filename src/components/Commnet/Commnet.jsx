
import './commnet.css'

const Comment = ({name,email,onClick}) => {
    
    

    return (
        <div className="commnet" onClick={onClick}>
            <p>name:{name}</p>
            <p>email:{email}</p>
        </div>
    );
}

export default Comment;