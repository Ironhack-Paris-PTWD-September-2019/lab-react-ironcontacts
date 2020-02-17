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
              
        //Iteration 3 | Sort Contacts By Name And Popularity


        //Sorted by Name : 

        compareName(a, b) {
              if ( a.name < b.name ){
                return -1;
              }
              if ( a.name > b.name ){
                return 1;
              }
              return 0;
            }
          
        sortByName() {
              const nameSortedArray = [...this.state.visibleContacts];
              nameSortedArray.sort(this.compareName);
              this.setState({
                visibleContacts: nameSortedArray,
              })
            }

        //Sorted by Popularity: 


        sortByPopularity() {
              const popularitySortedArray = [...this.state.visibleContacts];
              popularitySortedArray.sort((a, b) => {
                return b.popularity - a.popularity;
              });
              this.setState({
                visibleContacts: popularitySortedArray,
              })
            }
          
          //Iteration 4 | Remove Contacts

        deleteHandler(contactIndex) {
            const updatedArray = [...this.state.visibleContacts];
            updatedArray.splice(contactIndex, 1);
            this.setState({
              visibleContacts: updatedArray,
            })
          }
      
          render() {
            return (
              <div className="App">
                <h1>Ironhack Contacts</h1>
                <button onClick={() => this.addRandom()}>Add Random Contact</button> 
                <button onClick={() => this.sortByName()}>Sort by Name</button>
                <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button> 
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
                    { this.state.visibleContacts.map((contact,index) => (
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} width="60px" /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td><button className="delete-btn" onClick={() => this.deleteHandler()}>Delete</button> </td>


    </tr>
))};
                  </tbody>
                </table>
              </div>
            );
          }
        } 
        
        export default App;
        
        
        
        
        
        
        
        
        
        
        
        
        
        



        