
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({ user }) => {
    const { name, email, phone, website, id } = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle} className='box-border'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`} className='bg-teal-300  text-black p-3 my-2 rounded-xl'>Show Details</Link>


        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}
export default User;