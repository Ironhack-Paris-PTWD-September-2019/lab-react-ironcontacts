        import React, { Component } from 'react';
        import './App.css';
        import logo from './logo.svg';
        /*
        Inside src folder, we can find contacts.json, 
        a JSON file with the producer's contacts. 
        Import this file and create an array of the 
        5 first contacts to use as your initial state.
        imported below: 
        */
        import contacts from './contacts.json'; 

        class App extends Component {
          constructor(props) {
            super(props)
            this.state = {
              visibleContacts: contacts.slice(0, 5),
            }
          }

        // Iteration 2 | Add New Random Contacts

          addRandom() {            
              const randomContacts = contacts[Math.floor(Math.random() * contacts.length)];
              const randomizedArrayCopy = [...this.state.visibleContacts];
                    randomizedArrayCopy.unshift(randomContacts);
                this.setState({
                  visibleContacts: randomizedArrayCopy,  
                });
             };
              
        
      
          render() {
            return (
              <div className="App">
                <h1>Ironhack Contacts</h1>
                <button onClick={() => this.addRandom()}>Add Random Contact</button> 
                <table>
                  <thead>
                    <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Popularity</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.visibleContacts.map((contact,index) => (
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} width="60px" /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
    </tr>
))};
                  </tbody>
                </table>
              </div>
            );
          }
        } 
        
        export default App;
        
        
        
        
        
        
        
        
        
        
        
        
        



        