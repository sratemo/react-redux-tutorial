import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';
import ContactCard from '../components/ContactCard.jsx';

function mapStateToProps(state) {
    return {
        //Add State to Props
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //Add Dispatch to Props
    }
}

class ContactList extends Component {

    render() {
        //Render Component
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);