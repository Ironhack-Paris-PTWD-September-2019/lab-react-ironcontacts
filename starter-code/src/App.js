import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  state = {
    list: contacts.slice(0,5)
  }
    // add contacts[i] to this.state.list where i is random
  addContact = () => {
    let list2 = [...this.state.list]
    function pushItem(){
        list2.push(contacts[Math.floor(Math.random()*contacts.length)]);
        return list2
      }
    this.setState(
      {
      list: pushItem()
      }
    )
  }

  // sort by popularity

  sortPopularity = () => {
    // this.state.list.sort()

    let listByPopularity = [...this.state.list];

    listByPopularity.sort((a,b) => {
      
      if(a.popularity<b.popularity){
        return 1
      }
      if(a.popularity>b.popularity){
        return -1
      }
      if(a.popularity===b.popularity){
        return 0
      }
    }
    
    );

    console.log(listByPopularity)

    this.setState({
      list: listByPopularity
    })
  }

  // sort by name

  sortName = () => {
    let listByName = [...this.state.list];

    listByName.sort((a,b) => {

      if(a.name<b.name){
        return -1
      }
      if(a.name>b.name){
        return 1
      }
      if(a.name===b.name){
        return 0
      }
    }
    
    );

    console.log(listByName)

    this.setState({
      list: listByName
    })

    }

  deleteContact = (index) => {
    let listDelete = [...this.state.list];
    listDelete.splice(index,1)
    this.setState({
      list: listDelete
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={this.addContact}>Add random contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
                <th> Picture</th>
                <th> Name</th>
                <th> Popularity</th>
            </tr>
          </thead>
          {/* for each contact new table row */}
          {
            this.state.list.map((item, index) => { 
              return (
              <tr key={index}>
              <td> <img src={item.pictureUrl} alt=""/></td>
              <td> {item.name}</td>
              <td> {item.popularity}</td>
              <td><button onClick={() => this.deleteContact(index)}> Delete</button></td>
              </tr>
              )
            })
          }
        </table>
      </div>
    );
  }
}

export default App;
