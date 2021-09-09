import react from 'react';
import CardContact from './contactcard';
import { Link } from 'react-router-dom';

const Contactlist =(props)=>{
    console.log(props);

    const deleteContactHandle = (id)=>{
        props.getContactId(id);
    };
    const renderList = props.contacts.map((contact)=>{
        return(
            <CardContact contact={contact} clickHandler = {deleteContactHandle} key={contact.id}> </CardContact>
        )
    })
    return(
        <div className = "main">
            <h2>Conatact List</h2>
            <Link to="/add">
                <button className="ui button black center">Add contact</button>
            </Link>
            <div className="ui celled list">
                {renderList}
            </div>
        </div>
        
    )
}
export default Contactlist;