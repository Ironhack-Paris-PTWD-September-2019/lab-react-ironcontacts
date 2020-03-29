import React from 'react';


const Description = (props) => {

  return (
    <div className="contacts-list-item">
        <tbody>
            <tr>
                <td><img src= {props.pictureUrl} alt=""/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr>
        </tbody>  
    </div>
  )
};
/*<p>
<button onClick={(event)=>props.clickToDelete(props.id)}>Delete</button>
</p>*/
export default Description;