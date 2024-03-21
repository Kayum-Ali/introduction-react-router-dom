import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData()

    const { name, website } = user;
    return (
        <div>
            <h3>Details about users : {name}</h3>
            <p>website: {website}</p>

        </div>
    );
};

export default UserDetails;