import React, { Component } from 'react';
import contacts from './contacts.json';
import Description from './Description.js';

/*const randomContact= Math.random() 
        contactsCopy.push()*/
class Contacts extends Component {
    state ={
    contacts : contacts.slice(0,5)
    }  

    addContactHandler=()=>{
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        const contactsCopy=[...this.state.contacts] //copier le tableau pour le modifier ensuite.
        contactsCopy.push(randomContact)

        this.setState({
            contacts: contactsCopy
        })

    }
    render(){

        return(
            <div>
                <button onClick={(event)=>{
                    this.addContactHandler();
                }}>Add Random Contact</button>
                <div>
                <table>
                    <thead>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </thead>

                    {this.state.contacts.map((item,index)=> {
                        return <Description key={index} name={item.name} pictureUrl={item.pictureUrl} popularity={item.popularity}/>
                    })}
                </table>
                </div>
            </div>
        )
    } 
}
export default Contacts; 