import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json'

class App extends Component { 

  state = {
    arrayOfContacts : contacts.slice(0,5)
  }

  addContact =()=> {
    const newArray = [...this.state.arrayOfContacts]
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    newArray.push(randomContact)
    this.setState({
      arrayOfContacts : newArray
    })
  }

  sortByName =()=> {
    const newArray = [...this.state.arrayOfContacts]
    newArray.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      arrayOfContacts : newArray
    })
  }

  sortByPopularity = () => {
    const newArray = [...this.state.arrayOfContacts]
    newArray.sort((a, b) =>  b.popularity - a.popularity)
    this.setState({
      arrayOfContacts : newArray
    })
  }

  deleteOne =(index)=>{
    const newArray = [...this.state.arrayOfContacts]
    newArray.splice(index , 1)
    this.setState({
      arrayOfContacts : newArray
    })
  }
  

  render() {
    console.log(this.state.arrayOfContacts)
    return (
      <div className="App">
          <table>
            <tr>
              <th>
                <button onClick={this.addContact}>Add Random Contact</button><br/>
                Picture
              </th>
              <th>
                <button onClick={this.sortByName}>Sort by name</button><br/>
                Name
              </th>
              <th>
              <button onClick={this.sortByPopularity}>Sort by popularity</button><br/>
                Popularity
              </th>
              <th>
                Action
              </th>
            </tr>
            {this.state.arrayOfContacts.map((contact , index) => {
            return(
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="" style={{width:100}}/>
              </td>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.popularity}
              </td>
              <td>
              <button onClick={()=>{this.deleteOne(index)}}>Delete</button><br/>
              </td>
            </tr>
            )
        })}
          </table>

      </div>
    );
  }
}

export default App;
