import React, { Component } from 'react';
import TopPanel from '../top-panel';
import DateFilter from '../date-filter';
import Search from '../search';
import List from '../list';
import ListItemAdd from '../list-item-add';
import './app.css';

export default class App extends Component {
    state = {
        items: [
            { text: 'Wake Up', priority: 0, id: 1, date: 1571388296044 },
            { text: 'Drink Coffee', priority: 2, id: 2, date: 1571474696044 },
            { text: 'Make Awesome App', priority: 2, id: 3, date: 1571561096044 },
            { text: 'Have a lunch', priority: 3, id: 4, date: 1571388296044 }
        ],
        searchValue: '',
        filterValue: 'all' // all, today, tomorrow, week
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
            const date = new Date().valueOf();
            const newItem = { text, priority: 0, id: items.length + 1, date };
            const newArray = [...items, newItem];
            return { items: newArray }
        });
    }

    incPriority = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
            const item = items[idx];
            const priority = item.priority === 3 ? 0 : item.priority + 1;
            const newItem = {
                ...item,
                priority
            };
            const newArray = [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
            ];
            return { items: newArray };
        });
    }

    onSearchChange = (searchValue) => {
        this.setState({ searchValue });
    }

    onFilterChange = (filterValue) => {
        this.setState({ filterValue });
    }

    search (items, searchValue) {
        if (searchValue.length === 0) {
            return items;
        }

        return items.filter((el) =>
            el.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }

    filter (items, filterValue) {
        const dateOneDay = 24*60*60*1000;
        const dateNow = new Date();
        const dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()).valueOf();
        const dateTomorrow = dateToday + dateOneDay;
        const dateAfterTomorrow = dateToday + dateOneDay * 2;
        const dateWeek = dateToday + dateOneDay * 7;
        switch (filterValue) {
            case 'all':
                return items;
            case 'today':
                return items.filter(item => item.date >= dateToday && item.date < dateTomorrow);
            case 'tomorrow':
                return items.filter(item => item.date >= dateTomorrow && item.date < dateAfterTomorrow);
            case 'week':
                return items.filter(item => item.date >= dateToday && item.date < dateWeek);
            default:
                return items;
        }
    }

    render () {
        const { items, searchValue, filterValue } = this.state;
        const visibleItems = this.filter(this.search(items, searchValue), filterValue);
        return (
            <div className="app">
                <TopPanel />
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <div className="mt-2 mb-2 mr-2 p-2 app-left-panel">
                                <Search onSearchChange={ this.onSearchChange } />
                                <DateFilter
                                    filterValue={ filterValue }
                                    onFilterChange={ this.onFilterChange } />
                            </div>
                        </div>
                        <div className="col">
                            <List
                                items={ visibleItems }
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
