import { Link } from "react-router-dom";


const Post = ({post}) => {
    const{userId,id, title, body}=post;

    const postStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '15px'
    }
    return (
        <div style={postStyle}>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;