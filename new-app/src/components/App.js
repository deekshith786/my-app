import React, { useState, useEffect } from 'react';
import './App.css';
import Addcontact from './addcontact';
import Header from './header';
import Contactlist from './contactlist';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from './contactDetails';
import api from '../api/contacts';
import EditContact from './editcontact';

function App() {

  const Local_storege_key = "contacts"
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchresults, setsearchresults] = useState([]);


  const addcontactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  }

  const updatecontactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact;
    })
    )
  }

  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  useEffect(() => {
    // const retrivedata = JSON.parse(localStorage.getItem(Local_storege_key));
    // if (retrivedata) setContacts(retrivedata);
    const getallContacts = async () => {
      const allcontacts = await retriveContacts();
      if (allcontacts) setContacts(allcontacts);
    }
    getallContacts();
  }, [])

  const removecontacthandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newcontactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newcontactList);
  }

  const searcHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newcontactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
      })
      setsearchresults(newcontactList);
    }
    else {
      setsearchresults(contacts);
    }
  }

  useEffect(() => {
    // localStorage.setItem(Local_storege_key, JSON.stringify(contacts));
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
                contacts={searchTerm.length < 1 ? contacts : searchresults}
                getContactId={removecontacthandler}
                term={searchTerm}
                searchkeyword={searcHandler}
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
          <Route path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updatecontactHandler={updatecontactHandler}
              />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
