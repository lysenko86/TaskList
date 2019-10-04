import React from 'react';
import './left-panel.css';

const LeftPanel = () => {
    return (
        <div className="app-left-panel mt-2 mb-2 mr-2 p-2">
            <input type="text" className="form-control" placeholder="Швидкий пошук" />
            <div className="btn-group-vertical mt-2">
                <button type="button" className="btn btn-sm btn-primary">Всі задачі</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Сьогодні</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Завтра</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Тиждень</button>
            </div>
        </div>
    );
}

export default LeftPanel;
