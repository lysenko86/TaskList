import React from 'react';
import './list-item.css';

const ListItem = (props) => {
    return <li className="list-group-item">{props.text}</li>;
}

export default ListItem;
