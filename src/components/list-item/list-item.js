import React, { Component } from 'react';
import './list-item.css';

const ListItem = ({ text, priority, onDeleted, onIncPriority }) => {
    const itemClassNames = `app-list-item app-list-item-priority-${priority}`;

    return (
        <div className={ itemClassNames }>
            <span className="app-list-item-text">{ text }</span>
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
