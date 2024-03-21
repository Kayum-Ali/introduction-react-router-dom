
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Post = ({ post }) => {
    const { id, title, body } = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h3>Post id: {id}</h3>
            <p>Post Title : {title}</p>
            <p>Body : {body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>

        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}

export default Post;