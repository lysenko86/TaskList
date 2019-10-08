import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = ({ items, onDeleted }) => {
    const elements = items.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={ id } className="list-group-item">
                <ListItem { ...itemProps } onDeleted={ () => onDeleted(id) }/>
            </li>
        );
    });

    return (
        <ul className="list-group mt-2 mb-2 app-list">
            { elements }
        </ul>
    );
}

export default List;
