import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const { id, title } = postDetail
    return (
        <div>
            <h2>Post id : {id}</h2>
            <p>Post Title: {title}</p>

        </div>
    );
};

export default PostDetails;