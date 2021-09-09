import React, { useState, useEffect } from 'react';
import './App.css';
import Addcontact from './addcontact';
import Header from './header';
import Contactlist from './contactlist';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from './contactDetails';

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

  const removecontacthandler = (id) => {
    const newcontactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newcontactList);
  }

  useEffect(() => {
    localStorage.setItem(Local_storege_key, JSON.stringify(contacts));
  }, [contacts])
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact
            render={(props) => (
              <Contactlist
                {...props}
                contacts={contacts}
                getContactId={removecontacthandler}
              />
            )}
          />
           <Route path="/add" 
            render={(props) => (
              <Addcontact
                {...props}
                addcontactHandler={addcontactHandler}
              />
            )}
          />
          <Route path ="/contact/:id" component={ContactDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
