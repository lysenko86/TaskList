import React from 'react';
import DateFilter from '../date-filter';
import './left-panel.css';

const LeftPanel = () => {
    return (
        <div className="mt-2 mb-2 mr-2 p-2 app-left-panel">
            <input type="text" className="form-control" placeholder="Швидкий пошук" />
            <DateFilter />
        </div>
    );
}

export default LeftPanel;
