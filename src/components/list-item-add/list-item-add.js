import React, { Component } from 'react';
import './list-item-add.css';

export default class ListItemAdd extends Component {
    state = {
        text: ''
    }

    onTextChange = (e) => {
        this.setState({
            text: e.target.value.toUpperCase()
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text) {
            this.props.onAdded(this.state.text);
            this.setState({
                text: ''
            });
        }
    }

    render () {
        return (
            <form className="d-flex app-list-item-add-form" onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    className="form-control app-list-item-add-input"
                    onChange={ this.onTextChange }
                    placeholder="Enter new task..."
                    value={ this.state.text } />
                <button className="btn btn-outline-secondary app-list-item-add-btn">Add item</button>
            </form>
        );
    }
}
