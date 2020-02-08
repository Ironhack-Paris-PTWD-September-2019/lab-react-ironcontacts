import React, { Component } from "react";
import contacts from "./contacts.json";
import ContactCard from "./components/ContactCard";
import logo from "./logo.svg";
import "./App.css";

const table = contacts.splice(0, 5);
console.log(contacts.length);

class App extends Component {
  state = {
    innerContacts: table
  };

  findNewContact = () => {
    let newContact = contacts[Math.floor(Math.random() * 194)];
    if (this.state.innerContacts.indexOf(newContact) > -1) {
      newContact = this.findNewContact();
    } else {
      return newContact;
    }
  };

  addRandomContact = () => {
    let newContact = this.findNewContact();

    this.setState({
      innerContacts: [...this.state.innerContacts, newContact]
    });
  };

  sortByName = () => {
    let sortedContacts = [...this.state.innerContacts].sort((a, b) => {
      let name1 = a.name.split(" ")[1];
      let name2 = b.name.split(" ")[1];
      return name1.localeCompare(name2);
    });

    this.setState({
      innerContacts: sortedContacts
    });
  };

  sortByPopularity = () => {
    let sortedContacts = [...this.state.innerContacts].sort((a, b) => {
      return a.popularity - b.popularity;
    });

    this.setState({
      innerContacts: sortedContacts
    });
  };

  deleteContact = name => {
    let indexOfContactToDel = [...this.state.innerContacts].findIndex(el => {
      return el.name === name;
    });
    let copyContacts = [...this.state.innerContacts];
    copyContacts.splice(indexOfContactToDel, 1);
    this.setState({
      innerContacts: copyContacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}> Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.innerContacts.map((contact, index) => {
              return (
                <ContactCard
                  key={contact.pictureUrl}
                  name={contact.name}
                  popularity={contact.popularity}
                  pictureUrl={contact.pictureUrl}
                  deleteContact={() => this.deleteContact(contact.name)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
