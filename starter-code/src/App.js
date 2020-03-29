import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state = {
    contacts: [...contacts].slice(0,5)
  }

  addRandomly = () => {
    let randomIndex = Math.floor(Math.random()*contacts.length);
    console.log("foo",randomIndex);
    let randomContact = contacts[randomIndex];
    console.log("bar",randomContact);

    
    let newContacts = [...this.state.contacts];
    newContacts.push(randomContact)
    console.log("bam",newContacts)

    this.setState({
      contacts: newContacts
    })
  }

  sortByName = () => {
    let contactsByName = [...this.state.contacts];
    contactsByName.sort((a,b) => a.name.localeCompare(b.name))

    this.setState({
      contacts: contactsByName
    })
  }

  sortByPopularity = () => {
    let contactsbyPopularity = [...this.state.contacts];
   contactsbyPopularity.sort((a,b) => a.popularity-b.popularity)

    this.setState({
      contacts: contactsbyPopularity
    })
  }

  render() {

    return (
      <div className="App">
        <button onClick={this.addRandomly}>Add one !</button>
        <button onClick={this.sortByName}>Sort by name !</button>
        <button onClick={this.sortByPopularity}>Sort by popularity !</button>

        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          
          <tbody>
            {this.state.contacts.map((contact, index) => {
              console.log(contact)
              return (
                <tr key={index}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              )
            })}
          </tbody>
         
        
        </table>
      </div>
    );
  }
}

export default App;
