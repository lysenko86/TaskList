import React from 'react';
import './list-item.css';

const ListItem = (props) => {
    return <div className="list-item">{props.text}</div>;
}

export default ListItem;
