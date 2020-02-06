import React, { Component } from "react";
import contacts from "./contacts.json";
import logo from "./logo.svg";
import "./App.css";

const table = contacts.splice(0, 5);
// const list= table.map((contact, index) => {
//   (<tr key={index}>
//     <td>
//       <img src={contact.pictureUrl} />
//     </td>
//     <td>{contact.name}</td>
//     <td>{contact.popularity}</td>
//   </tr>;)
// })
//console.log(table);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {table.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img class="picture-contact" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
