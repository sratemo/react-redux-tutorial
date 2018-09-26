import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
        <div className="todoItem">
            <input className="todoCheckbox" type="checkbox" onClick={this.props.clickCheckbox} checked={this.props.checked}/>
            <p className={this.props.checked ? "finished" : ""}>{this.props.todoTask}</p>
        </div>)
    }
}

export default TodoItem;