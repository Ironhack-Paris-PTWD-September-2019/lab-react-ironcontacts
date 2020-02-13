import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    actors: contacts.slice(0,5)
  }
  
  addContact = () => {
      var contacts2 = contacts.slice(5,contacts.length-1)
      var actors2= [...this.state.actors];
      var randomIndex = Math.floor(Math.random()*contacts2.length);
      actors2.push(contacts2[randomIndex]);
      this.setState(
        {
          actors: actors2
        }
      )
  }

  sortByName = () => {
      var actors2 = [...this.state.actors]
      //const test = actors2.sort((a,b) => a.name.localeCompare(b.name))
      //console.log(test)
      actors2.sort( (a,b) => {
        if(a.name <b.name){
          return -1
        } else {
          return 1
        }
      })
      this.setState(
        {
          actors: actors2
        }
      )
  }

  sortByPopularity = () => {
    var actors2 = [...this.state.actors]
    actors2.sort( (a,b) => b.popularity-a.popularity)
    this.setState (
      {
        actors:actors2
      }
    )
  }

  deleteActor = (index) => {

  var actors3 = [...this.state.actors]
    actors3.splice(index,1)
    this.setState (
      {
      actors: actors3
      }
    )
  }

  render() {
    console.log('contacts',contacts)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>Iron Contacts</h2>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="actors">
          <div className="actors-contacts">
            <div className="actors-contacts-col">Picture</div>
            <div className="actors-contacts-col">Name </div> 
            <div className="actors-contacts-col">Popularity</div>
          </div>
          {this.state.actors.map((actor,index) => {
            return(
              <div key={index} className="actors-contacts">
                <div className="actors-contacts-col"><img src={actor.pictureUrl} alt={actor.name}></img></div>
                <div className="actors-contacts-col">{actor.name}</div>
                <div className="actors-contacts-col">{actor.popularity}</div>
            <button onClick={()=>{this.deleteActor(index)}}>Delete {index}</button> 
              </div> 
            )
          })}
        </div>

      </div>
    );
  }
}

export default App;
