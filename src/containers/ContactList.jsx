import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import ContactCard from '../components/ContactCard.jsx';

function mapStateToProps(store) {
    return {
        contactList: store.contactList,
        name: store.newName,
        address: store.newAddress,
        phone: store.newPhone,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCard: (id, name, address, phone) => {
            return function () {
                dispatch(actions.updateContact(id, { name: name, address: address, phone: phone }));
            }
        },
        deleteCard: (id) => {
            return function () {
                dispatch(actions.deleteContact(id));
            }
        }
    }
}

class ContactList extends Component {

    render() {
        const { contactList, name, address, phone, updateCard, deleteCard } = this.props;
        let todoItems = contactList.map((contact) => {
            return (<ContactCard id={contact.id} name={contact.name} address={contact.address} phone={ contact.phone }
                deleteCard={ deleteCard(contact.id) } updateCard={ updateCard(contact.id, name, address, phone) } />)
        });

        return (
            <div className="contactList">
                {todoItems}
            </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

