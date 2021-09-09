import react from  'react';
import image from "../images/wall11.jpg"
const CardContact = (props) =>{

    const {id, name, email} = props.contact;
    return(
        <div className="item">
                <img className="ui-avatar image" width ="50px" height="50px" src={image} alt="image wall"/>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                        <i className="trash alternate ouline icon"></i>
                </div>
            </div>
    );
}

export default CardContact;