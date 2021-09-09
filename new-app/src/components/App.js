import React from 'react';
import './App.css';
import Addcontact from './addcontact';
import Header from './header';
import Contactlist from './contactlist';

function App() {

  const contacts =[
    {
      id:"1",
      Name:"deeskhith",
      email:"dfa@edfs.com",
    },
    {
      id:"2",
      Name:"deesk",
      email:"da@ed.com",
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <Addcontact />
      <Contactlist contacts={contacts} />
    </div>
  );
}

export default App;
