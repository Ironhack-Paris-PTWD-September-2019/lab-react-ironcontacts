import React from "react";


const DynamicTable= (props) => {
  return (
      <tr>
        <td><img src={props.pictureUrl} alt={props.name} width="80px" /></td>
        <td>{props.name}</td>
        <td>{props.popularity.toFixed(2)}</td>
      </tr>
  );
};

export default DynamicTable;