import {combineReducers} from 'redux';
import contactList from './contactListReducer.js';
import {newName, newPhone, newAddress} from './inputReducers.js';


export default combineReducers({
    contactList,
    newName,
    newPhone,
    newAddress
});