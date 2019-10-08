import React, { Component } from 'react';
import './list-item.css';

export default class ListItem extends Component {
    constructor (props) {
        super();
        this.state = {
            priority: props.priority
        };
    };

    incPriority = () => {
        this.setState({
            priority: this.state.priority === 3 ? 0 : this.state.priority + 1
        });
    };

    removeItem = () => {
        console.log(`Remove item "${this.props.text}"`);
    };

    render () {
        const { text } = this.props;
        const itemClassNames = `app-list-item app-list-item-priority-${this.state.priority}`;

        return (
            <div className={ itemClassNames }>
                <span className="app-list-item-text">{ text }</span>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-danger float-right app-list-item-action-btn"
                    onClick={ this.removeItem }
                ><i className="far fa-trash-alt" /></button>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-success float-right app-list-item-action-btn"
                    onClick={ this.incPriority }
                ><i className="fas fa-exclamation" /></button>
            </div>
        );
    }
}
