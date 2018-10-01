import React, {Component} from 'react';

class ContactCard extends Component {
    render() {

        const {id, name, address, phone, updateCard, deleteCard} = this.props;
        return (
        <div className="contactCard">
            <p>Name: <content>{ name }</content></p>
            <p>Address: <content>{ address }</content></p>
            <p>Phone: <content>{ phone }</content></p>
            <button onClick={ updateCard }>Update Contact</button>
            <button onClick={ deleteCard }>Delete Contact</button>
        </div>)
    }
}

export default ContactCard;