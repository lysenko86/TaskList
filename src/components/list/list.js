import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = () => {
    return (
        <div className="app">
            <ListItem text="first task 1" />
            <ListItem text="second task" />
            <ListItem text="third task" />
        </div>
    );
}

export default List;
