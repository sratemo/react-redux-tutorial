import { combineReducers } from 'redux';
import contactList from './contactListReducer.js';
import { newName, newPhone, newAddress } from './inputReducers.js';
import * as types from '../constants/actionTypes.js'


export default combineReducers({
    contactList, 
    newName,
    newPhone,
    newAddress
});