import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = () => {
    return (
        <ul className="list-group">
            <ListItem text="first task 111" />
            <ListItem text="second task 222" />
            <ListItem text="third task 333" />
        </ul>
    );
}

export default List;
