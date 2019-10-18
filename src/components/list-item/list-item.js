import React from 'react';
import './list-item.css';

const ListItem = ({ date, text, priority, onDeleted, onIncPriority }) => {
    const itemClassNames = `app-list-item app-list-item-priority-${priority}`;
    const itemDate = new Date(date);
    const itemDay = ('0' + itemDate.getDate()).slice(-2);
    const itemMonth = ('0' + (itemDate.getMonth() + 1)).slice(-2);
    const itemYear = itemDate.getFullYear();
    const dateToShow = `${itemDay}.${itemMonth}.${itemYear}`;

    return (
        <div className={ itemClassNames }>
            <span className="app-list-item-text">{ `${dateToShow} - ${text}` }</span>
            <button
                type="button"
                className="btn btn-sm btn-outline-danger float-right app-list-item-action-btn"
                onClick={ onDeleted }
            ><i className="far fa-trash-alt" /></button>
            <button
                type="button"
                className="btn btn-sm btn-outline-success float-right app-list-item-action-btn"
                onClick={ onIncPriority }
            ><i className="fas fa-exclamation" /></button>
        </div>
    );
}

export default ListItem;
