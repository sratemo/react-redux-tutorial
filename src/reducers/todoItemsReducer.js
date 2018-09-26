import * as types from '../constants/actionTypes.js';

export default function (previousState = [], action) {
    switch(action.type) {
        case types.CREATE_ACTION:
            let stateCopy = previousState.slice();
            let newTodo = {action: action.payload, checked: false, id: stateCopy.length}
            stateCopy.push(newTodo);
            return stateCopy;
        case types.TOGGLE_COMPLETE: {
            let stateCopy = previousState.slice();
            stateCopy[action.payload].checked = !stateCopy[action.payload].checked;
            return stateCopy;
        }
        default:
            return previousState;
    }
}