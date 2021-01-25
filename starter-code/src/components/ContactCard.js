import React from "react";

class ContactCard extends React.Component {
  render() {
    return (
      <tr key={this.props.index}>
        <td>
          <img className="picture-contact" src={this.props.pictureUrl} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>
          <button onClick={this.props.deleteContact}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default ContactCard;
