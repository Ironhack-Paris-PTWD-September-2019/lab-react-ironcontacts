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

  deleteActor = (item) => {
    const copyContactsArray = [...this.state.contactsArray];
    const actorToDelete = copyContactsArray.findIndex(itemCopy => itemCopy.name === item.name);
    copyContactsArray.splice(actorToDelete, 1);
    this.setState({
      contactsArray : copyContactsArray
      });
  }





  render() {
    console.log (contacts);
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={(event) => this.addRandomActor()}>Add Random Contact</button>
      <button onClick={(event) => this.sortByName()}>Sort by Name</button>
      <button onClick={(event) => this.sortByPopularity()}>Sort by Popularity</button>
      <div className="tittles">
        <h1>Picture</h1>
        <h1>Name</h1>
        <h1>Popularity</h1>
        <h1>Action</h1>
      </div>
        {this.state.contactsArray.map((item, index) => {
          return (
            <div className="actorInfo" key={index}>
              <div className="actorInfodiv"><img src={item.pictureUrl} alt="" /></div>
              <div className="actorInfodiv"><h1>{item.name}</h1></div>
              <div className="actorInfodiv numberRound"><h1>{Math.round(item.popularity*100)/100}</h1></div>
              <div className="actorInfodiv"><button onClick={(event) => this.deleteActor(item)}>Delete</button></div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
