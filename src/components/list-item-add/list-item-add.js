import React from 'react';
import './list-item-add.css';

const ListItemAdd = ({ onAdded }) => {
    return <button
        type="button"
        className="btn btn-outline-secondary app-list-item-add"
        onClick={ () => { onAdded('Some text'); } }>Add item</button>;
}

export default ListItemAdd;
