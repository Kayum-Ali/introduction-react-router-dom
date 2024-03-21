
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate()
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleClick = () => {
        navigate(`/post/${id}`)

    }
    return (
        <div style={postStyle}>
            <h3>Post id: {id}</h3>
            <p>Post Title : {title}</p>
            <p>Body : {body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleClick}>Click to see detail</button>

        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}

export default Post;