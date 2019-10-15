import React, { Component } from 'react';
import TopPanel from '../top-panel';
import LeftPanel from '../left-panel';
import List from '../list';
import ListItemAdd from '../list-item-add';
import './app.css';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            items: [
                { text: 'Wake Up', priority: 0, id: 1 },
                { text: 'Drink Coffee', priority: 2, id: 2 },
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
            return { items: newArray };
        });
    }

    addItem = (text) => {
        this.setState(({ items }) => {
            const newItem = { text: text, priority: 0, id: items.length + 1 };
            const newArray = [...items, newItem];
            return { items: newArray }
        });
    }

    incPriority = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
            const item = items[idx];
            const priority = item.priority === 3 ? 0 : item.priority + 1;
            const newItem = Object.assign({}, item, { priority });
            const newArray = [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
            ];
            return { items: newArray };
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
                                onDeleted={ this.deleteItem }
                                onIncPriority={ this.incPriority } />
                            <ListItemAdd onAdded= { this.addItem } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
