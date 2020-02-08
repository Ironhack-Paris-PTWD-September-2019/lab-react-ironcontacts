import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import json from './contacts.json'

class App extends Component {
  state = {contacts : 
    json.splice(0,4)}

  // randomNumber() {
  //   return (Math.floor(Math.random()*json.length);
  // }
      
  addRandomContact = () => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(json[(Math.floor(Math.random()*json.length))]);
    this.setState({
      contacts: contactsCopy
    })


  }

  sortByName = () => {

    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  this.setState({
    contacts: contactsCopy
  })
   

  }

  sortByPopularity = () => {

    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a, b){
      if(a.popularity > b.popularity) { return -1; }
      if(a.popularity < b.popularity) { return 1; }
      return 0;
  })
  this.setState({
    contacts: contactsCopy
  })
   

  }
  clickToDelete =(index) => {
        const contactsCopy = [...this.state.contacts];
        // const contactIndex = contactsCopy.find(el => el.index === celebrity.index)
        contactsCopy.splice(index, 1);

        this.setState({
          contacts: contactsCopy
        })

      }

  render() {
      return (
      <div className="App">
       <button onClick={this.addRandomContact}>Ajouter un contact au hasard</button>
       <button onClick={this.sortByName}>ranger dans l'ordre Alpha</button>
       <button onClick={this.sortByPopularity}>ranger dans l'ordre de popularité</button>
        <table>
    <thead>
        <tr>
            <th colspan="2">IronContact</th>
        </tr>
    </thead>

    <tbody>
    <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
        </tr>
      {this.state.contacts.map((celebrity, index) =>(
        <tr>
            <td><img src={celebrity.pictureUrl} alt="photo"/></td>
            <td>{celebrity.name}</td>
            <td>{celebrity.popularity}</td>
            <td ><button onClick={()=>this.clickToDelete(index)}> Delete</button></td>
        </tr>
      ))}
       

        <tr>
          <td>map</td>
        </tr>
    </tbody>
</table>
      </div>
    );
  }
}

export default App;
