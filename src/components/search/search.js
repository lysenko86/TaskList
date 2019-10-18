import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
    state = {
        searchValue: ''
    }

    onChange = (e) => {
        const searchValue = e.target.value;
        this.setState({ searchValue });
        this.props.onSearchChange(searchValue);
    }

    render () {
        return <input
            type="text"
            className="form-control app-search"
            placeholder="Швидкий пошук"
            value={ this.state.searchValue }
            onChange={ this.onChange } />
    }
}
