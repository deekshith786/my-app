import react from 'react';
import CardContact from './contactcard';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Contactlist = (props) => {
    console.log(props);
    const inputEl = useRef("");
    const deleteContactHandle = (id) => {
        props.getContactId(id);
    };
    const renderList = props.contacts.map((contact) => {
        return (
            <CardContact contact={contact} clickHandler={deleteContactHandle} key={contact.id}> </CardContact>
        )
    })

    const getsearchterm = () => {
        props.searchkeyword(inputEl.current.value);
    }
    return (
        <div className="main">
            <h2>Conatact List</h2>
            <Link to="/add">
                <button className="ui button black center" align="right" >Add contact</button>
            </Link>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="seach contacts"
                        className="prompt"
                        value={props.term} onChange={getsearchterm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderList.length > 0 ? renderList : "No contacts available"}
            </div>
        </div>

    )
}
export default Contactlist;