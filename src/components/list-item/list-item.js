import React from 'react';
import './list-item.css';

const ListItem = ({ text, priority=0 }) => {
    const itemClassNames = `app-list-item app-list-item-priority-${priority}`;

    const removeItem = () => {
        console.log('Remove item');
    };

    return (
        <div className={ itemClassNames }>
            { text }
            <button
                type="button"
                className="app-list-item-action-btn btn btn-sm btn-outline-danger float-right"
                onClick={ removeItem }
            ><i className="far fa-trash-alt" /></button>
            <button
                type="button"
                className="app-list-item-action-btn btn btn-sm btn-outline-success float-right"
            ><i className="fas fa-exclamation" /></button>
        </div>
    );
}

export default ListItem;
