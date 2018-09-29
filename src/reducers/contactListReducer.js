import * as types from '../constants/actionTypes.js';

export default function (previousState = [], action) {
    switch(action.type) {
        case types.CREATE_CONTACT:{
            let stateCopy = previousState.slice();
            let newTodo = {id: stateCopy.length,
                phone: action.payload.phone,
                address: action.payload.address,
                name: action.payload.name
            }
            stateCopy.push(newTodo);
            return stateCopy;}
        case types.UPDATE_CONTACT:{
            let stateCopy = previousState.slice();
            stateCopy[action.payload.id] = action.payload;
            return stateCopy;}
        case types.DELETE_CONTACT:{
            let stateCopy = previousState.slice();
            stateCopy.splice(action.payload.id, 1);
            return stateCopy;}
        default:
            return previousState;
    }
}