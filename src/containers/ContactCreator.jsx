import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

function mapStateToProps(store) {
    return {
        newName: store.newName,
        newAddress: store.newAddress,
        newPhone: store.newPhone,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createContact: function (data) {
            dispatch(actions.createContact(data));
        },
        updateNewName: function (event) {
            dispatch(actions.updateNewName(event.target.value))
        },
        updateNewAddress: function (event) {
            dispatch(actions.updateNewAddress(event.target.value));
        },
        updateNewPhone: function (event) {
            dispatch(actions.updateNewPhone(event.target.value));
        }
    }
}

class ContactCreator extends Component {

    render() {
        const { createContact, updateNewName, updateNewAddress, updateNewPhone, newName, newAddress, newPhone } = this.props;
        return (<div className="contactCreator">
            <input placeholder={'Contact Name'} className="contactNameInput" onChange={updateNewName} value={newName}></input>
            <input placeholder={'Contact Address'} className="contactAddressInput" onChange={updateNewAddress} value={newAddress}></input>
            <input placeholder={'Contact Phone'} className="contactPhoneInput" onChange={updateNewPhone} value={newPhone}></input>
            <button onClick={() => createContact({ name: newName, address: newAddress, phone: newPhone })}>Create Contact</button>
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreator);