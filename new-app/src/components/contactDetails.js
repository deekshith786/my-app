import react from 'react';
import image from "../images/wall11.jpg"
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className="main">
            <h1>Contact Details</h1>
            <div className="ui crard centered">
                <div className="image">
                    <img src={image} width="400px" height="400px" alt="user image" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">back to contact list</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;