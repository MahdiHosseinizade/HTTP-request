import Comment from "../Commnet/Commnet";
import FullComment from "../FullCommnet/FullComment";
import NewComment from "../NewComment/NewComment";

import './discussion.css'

const Discussion = () => {
    return (
        <main>
            <section>
                <Comment/>
                <Comment/>
                <Comment/>
            </section>
            <section>
                <FullComment/>
            </section>
            <section>
                <NewComment/>
            </section>
            
        </main>
    );
}

export default Discussion;