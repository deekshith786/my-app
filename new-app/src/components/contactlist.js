import react from 'react';
import CardContact from './contactcard';

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
        <div className="ui celled list">
            {renderList}
        </div>
    )
}
export default Contactlist;