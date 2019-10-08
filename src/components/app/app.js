import React, { Component } from 'react';
import TopPanel from '../top-panel';
import LeftPanel from '../left-panel';
import List from '../list';
import './app.css';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            items: [
                { text: 'Wake Up', priority: 0, id: 1 },
                { text: 'Drink Coffee', priority: 1, id: 2 },
                { text: 'Make Awesome App', priority: 2, id: 3 },
                { text: 'Have a lunch', priority: 3, id: 4 }
            ]
        };
    }

    deleteItem = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
            const newArray = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ];
            return {
                items: newArray
            };
        });
    }

    render () {
        return (
            <div className="app">
                <TopPanel />
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <LeftPanel />
                        </div>
                        <div className="col">
                            <List
                                items={ this.state.items }
                                onDeleted={ this.deleteItem } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
