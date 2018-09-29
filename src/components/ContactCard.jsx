import React, {Component} from 'react';

class ContactCard extends Component {
    render() {
        return (
        <div className="contactCard">
            <p>Name: <content>{this.props.name}</content></p>
            <p>Address: <content>{this.props.address}</content></p>
            <p>Phone: <content>{this.props.phone}</content></p>
            <button onClick={this.props.updateCard}>Update Contact</button>
            <button onClick={this.props.deleteCard}>Delete Contact</button>
        </div>)
    }
}

export default ContactCard;