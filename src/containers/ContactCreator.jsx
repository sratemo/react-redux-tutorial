import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';

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

class ContactCreator extends Component {
    
    render() {
        //Render Component
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreator);