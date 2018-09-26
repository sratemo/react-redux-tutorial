import * as types from '../constants/actionTypes.js';

export const toggleAction = (actionId) => ({
    type: types.TOGGLE_COMPLETE,
    payload: actionId, 
});

export const createTodo = (action) => ({
    type: types.CREATE_ACTION,
    payload: action,
});

export const updateNewTodo = (newTodo) => ({
    type: types.NEW_TODO,
    payload: newTodo,
});
