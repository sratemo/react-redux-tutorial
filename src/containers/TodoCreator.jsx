import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';

function mapStateToProps(store) {
    return {
        newTodo: store.newTodo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createTodo: function (action) {
            return function() {
                dispatch(actions.createTodo(action));
            }
        },
        updateNewTodo: function(event) {
            dispatch(actions.updateNewTodo(event.target.value));
        }
    }
}

class TodoCreator extends Component {

    render() {
        return (<div>
            <input className="todoTaskInput" onChange={this.props.updateNewTodo} value={this.props.newTodo}></input>
            <button onClick={this.props.createTodo(this.props.newTodo)}>Create Todo</button>
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreator);