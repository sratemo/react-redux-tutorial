import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        createContact: function(data) {
            return function(event) {
                dispatch(actions.createContact(data));
            }
        },
        updateNewName: function(event) {
            dispatch(actions.updateNewName(event.target.value))
        },
        updateNewAddress: function(event) {
            dispatch(actions.updateNewAddress(event.target.value));
        },
        updateNewPhone: function(event) {
            dispatch(actions.updateNewPhone(event.target.value));
        }
    }
}

class ContactCreator extends Component {

    render() {
        return (<div className="contactCreator">
            <input placeholder={'Contact Name'} className="contactNameInput" onChange={this.props.updateNewName} value={this.props.newName}></input>
            <input placeholder={'Contact Address'} className="contactAddressInput" onChange={this.props.updateNewAddress} value={this.props.newAddress}></input>
            <input placeholder={'Contact Phone'} className="contactPhoneInput" onChange={this.props.updateNewPhone} value={this.props.newPhone}></input>
            <button onClick={this.props.createContact({name: this.props.newName, address: this.props.newAddress, phone: this.props.newPhone})}>Create Contact</button>
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreator);