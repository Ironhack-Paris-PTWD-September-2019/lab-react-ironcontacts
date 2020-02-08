import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state = {
   contactsArray: contacts.slice(0, 5),
  
  }


  addRandomActor = () => {
    const  contactsSupp= contacts.slice(5, 199);
    const copyContactsArray = [...this.state.contactsArray];
    const randomId = Math.floor(Math.random() * 195);
    copyContactsArray.push(contactsSupp[randomId]);
    this.setState({
      contactsArray: copyContactsArray
    }); 
  }

  sortByName = () => {
    const copyContactsArray = [...this.state.contactsArray];
    copyContactsArray.sort( (a,b) => a.name.localeCompare(b.name));
    this.setState({
    contactsArray : copyContactsArray
    });
  }


  sortByPopularity = () => {
    const copyContactsArray = [...this.state.contactsArray];
    copyContactsArray.sort((a,b) => b.popularity - a.popularity);
    this.setState({
    contactsArray : copyContactsArray
    });
  }

  deleteActor = (index) => {
    const copyContactsArray = [...this.state.contactsArray];
    const actorId = copyContactsArray.findIndex(item => item.index === index);
    copyContactsArray.splice(actorId, 1);
    this.setState({
      contactsArray : copyContactsArray
      });
  }





  render() {
    console.log (contacts);
    return (
      <div className="App">
        <button onClick={(event) => this.addRandomActor()}>Add Random Contact</button>
        <button onClick={(event) => this.sortByName()}>Sort by Name</button>
        <button onClick={(event) => this.sortByPopularity()}>Sort by Popularity</button>
        {this.state.contactsArray.map( (item, index) => {
          return (
            <div className="actorInfo" key={index}>
              <img src={item.pictureUrl} alt="" />
              <h1>{item.name}</h1>
              <h1>{item.popularity}</h1>
              <button onClick={(event) => this.deleteActor()}>Delete</button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
