import React from 'react';

export default class TodoList extends React.Component{
render(){
        const list = this.props.items.map(item => (
            <li key={item.id} className='list-group-item list-group-item-light d-flex justify-content-between align-items-center mb-1'>
                {item.text}
                <button type="button" className="btn btn-success" onClick={() => this.props.onDelete(item.id)}>✓</button>
            </li>
        ));
        return (
            <ul className='list-group w-25'>
                {list}
            </ul>
        )
    }
}