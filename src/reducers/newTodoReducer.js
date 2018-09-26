import * as types from '../constants/actionTypes.js';

export default function (previousState = "", action) {
    switch(action.type) {
        case types.NEW_TODO:
            return action.payload;
        case types.CREATE_ACTION:
            return "";
        default:
            return previousState;
    }
}