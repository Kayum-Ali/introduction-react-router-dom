import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const { id, title } = postDetail;
    const navigate = useNavigate()
    const handleGoback = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Post id : {id}</h2>
            <p>Post Title: {title}</p>
            <button onClick={handleGoback} className="bg-[tomato] rounded-xl p-3">Go Back</button>

        </div>
    );
};

export default PostDetails;