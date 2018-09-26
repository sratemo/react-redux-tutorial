import {combineReducers} from 'redux';
import todoItemList from './todoItemsReducer.js';
import newTodo from './newTodoReducer.js';


export default combineReducers({
    todoItemList,
    newTodo,
});