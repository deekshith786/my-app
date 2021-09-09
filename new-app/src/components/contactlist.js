import react from 'react';
import CardContact from './contactcard';

const Contactlist =(props)=>{
    console.log(props);

    const renderList = props.contacts.map((contact)=>{
        return(
            <CardContact contact={contact}> </CardContact>
        )
    })
    return(
        <div className="ui celled list">
            {renderList}
        </div>
    )
}
export default Contactlist;