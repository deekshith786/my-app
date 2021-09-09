import react from 'react';
import image from "../images/wall11.jpg"
import { Link } from 'react-router-dom';
const CardContact = (props) => {

    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui-avatar image" width="50px" height="50px" src={image} alt="image wall" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
                <i className="trash alternate ouline icon" onClick={() => props.clickHandler(id)}></i>
                <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                    <i className="edit alternate ouline icon" ></i>
                </Link>
            </div>
        </div>
    );
}

export default CardContact;