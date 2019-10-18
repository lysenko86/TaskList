import React, { Component } from 'react';
import './date-filter.css';

export default class DateFilter extends Component {
    buttons = [
        { name: 'all', title: 'Всі задачі' },
        { name: 'today', title: 'Сьогодні' },
        { name: 'tomorrow', title: 'Завтра' },
        { name: 'week', title: 'Тиждень' }
    ]

    render () {
        const { filterValue, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, title }) => {
            const isActive = name === filterValue;
            const clazz = isActive ? 'btn-primary' : 'btn-outline-secondary';
            return <button
                type="button"
                key={ name }
                className={ `btn btn-sm ${clazz}` }
                onClick={ () => onFilterChange(name) }>{ title }</button>
        });
        return (
            <div className="btn-group-vertical mt-2">
                { buttons }
            </div>
        );
    }
}
