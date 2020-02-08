import React from 'react';

const Description = (props) => {
  return (
    <div className="contacts-list-item">
        <img src= {props.pictureUrl} alt="">Picture</img>
        <h2>Name {props.name}</h2>
        <h2>Popularity {props.popularity}</h2>
    </div>
  )
};
/*<p>
<button onClick={(event)=>props.clickToDelete(props.id)}>Delete</button>
</p>*/
export default Description;