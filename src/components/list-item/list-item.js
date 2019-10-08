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
        this.setState(({ priority }) => {
            return {
                priority: priority === 3 ? 0 : priority + 1
            }
        });
    };

    render () {
        const { text, onDeleted } = this.props;
        const itemClassNames = `app-list-item app-list-item-priority-${this.state.priority}`;

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
                    onClick={ this.incPriority }
                ><i className="fas fa-exclamation" /></button>
            </div>
        );
    }
}
