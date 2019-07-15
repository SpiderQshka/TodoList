import React from 'react';
import TodoList from './TodoList.js';


export default class TodoApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            text: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick(e){
        if (!this.state.text.length) {
            return;
        }
        
        const newItem = {
            id: Date.now(),
            text: this.state.text
        }

        this.setState({
            items: this.state.items.concat(newItem),
            text: ''
        })
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleDelete(deletedItemId){
        const filteredItems = this.state.items.filter(item => {
            return item.id !== deletedItemId
          })
          this.setState({
            items: filteredItems,
          })
    }

    render(){
        return (
            <main className='d-flex flex-column text-center align-items-center'>
                <h3 className='display-4'>Todo List</h3>
                <TodoList items={this.state.items} onDelete={this.handleDelete} />
                <div className="input-group col-3 m-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-success" type="button" onClick={this.handleClick}>Add new task</button>
                    </div>
                    
                    <input type="text" className="form-control" placeholder="Task" onChange={this.handleChange} value={this.state.text} />
                </div>
            </main>
        )
    }
}