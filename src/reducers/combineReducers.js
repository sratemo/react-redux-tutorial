import combineReducers from 'react-redux';
import todoItemsReducer from './todoItemsReducer.js';

export default combineReducers({
    todoItemList: todoItemsReducer,
});