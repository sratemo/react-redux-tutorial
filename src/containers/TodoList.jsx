import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';
import TodoItem from '../components/TodoItem.jsx';

function mapStateToProps(store) {
    return {
        todoList: store.todoItemList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clickCheckbox: function (itemID) {
            return function(){
                dispatch(actions.toggleAction(itemID));
            }
        }
    }
}

class TodoList extends Component {

    render() {
        let todoItems = this.props.todoList.map((todoItem) => {
            return (<TodoItem todoTask={todoItem.action} checked={todoItem.checked} clickCheckbox={this.props.clickCheckbox(todoItem.id)}></TodoItem>)
        });

        return (
        <div className="todoList">
            {todoItems}
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);