import React, { Component } from 'react';
import contacts from './contacts.json';
import Description from './Description.js';

class Contacts extends Component {
    state ={
    contacts : contacts.slice(0,5)
    }  
    /*reverseItems(){
        const contactsCopy =[...this.state.contacts]; 
        contactsCopy.reverse(0,1)

        this.setState({
            contacts: contactsCopy
        })
    }*/

    render(){
        return(
            <div>
                {this.state.contacts.map((item,index)=> {
                    return <Description key={index} name={item.name} pictureUrl={item.pictureUrl} popularity={item.popularity}/>
                })}
                
            </div>
        )
    } 
}
export default Contacts; 