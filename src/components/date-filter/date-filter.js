import React, { Component } from 'react';
import './date-filter.css';

export default class DateFilter extends Component {
    constructor () {
        super();
        this.state = {
            dateFilter: 'all'
        };
    }

    setDateFilterAll = () => {
        this.setState({
            dateFilter: 'all'
        });
    }

    setDateFilterToday = () => {
        this.setState({
            dateFilter: 'today'
        });
    }

    setDateFilterTomorrow = () => {
        this.setState({
            dateFilter: 'tomorrow'
        });
    }

    setDateFilterWeek = () => {
        this.setState({
            dateFilter: 'week'
        });
    }

    render () {
        const { dateFilter } = this.state;
        return (
            <div className="btn-group-vertical mt-2">
                <button
                    type="button"
                    className={ `btn btn-sm ${dateFilter === 'all' ? 'btn-primary' : 'btn-outline-secondary'}` }
                    onClick={ this.setDateFilterAll }>Всі задачі</button>
                <button
                    type="button"
                    className={ `btn btn-sm ${dateFilter === 'today' ? 'btn-primary' : 'btn-outline-secondary'}` }
                    onClick={ this.setDateFilterToday }>Сьогодні</button>
                <button
                    type="button"
                    className={ `btn btn-sm ${dateFilter === 'tomorrow' ? 'btn-primary' : 'btn-outline-secondary'}` }
                    onClick={ this.setDateFilterTomorrow }>Завтра</button>
                <button
                    type="button"
                    className={ `btn btn-sm ${dateFilter === 'week' ? 'btn-primary' : 'btn-outline-secondary'}` }
                    onClick={ this.setDateFilterWeek }>Тиждень</button>
            </div>
        );
    }
}
