import React, { Component } from 'react';
import './App.css';
import ContactCreator from './containers/ContactCreator.jsx';
import ContactList from './containers/ContactList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Contact Book</h1>
          <ContactCreator />
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
