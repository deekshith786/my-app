import React, { useState, useEffect } from 'react';
import './App.css';
import Addcontact from './addcontact';
import Header from './header';
import Contactlist from './contactlist';
import { uuid } from 'uuidv4';

function App() {

  const Local_storege_key = "contacts"
  const [contacts, setContacts] = useState([]);
  const addcontactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  useEffect(() => {
    const retrivedata = JSON.parse(localStorage.getItem(Local_storege_key));
    if (retrivedata) setContacts(retrivedata);
  }, [])

  const removecontacthandler = (id) =>{
    const  newcontactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })

    setContacts(newcontactList);
  }

  useEffect(() => {
    localStorage.setItem(Local_storege_key, JSON.stringify(contacts));
  }, [contacts])
  return (
    <div className="ui container">
      <Header />
      <Addcontact addcontactHandler={addcontactHandler} />
      <Contactlist contacts={contacts} getContactId = {removecontacthandler}/>
    </div>
  );
}

export default App;
