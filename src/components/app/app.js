import React from 'react';
import TopPanel from '../top-panel';
import LeftPanel from '../left-panel';
import List from '../list';
import './app.css';

const App = () => {
    const items = [
        { text: 'Wake Up', priority: 0, id: 1 },
        { text: 'Drink Coffee', priority: 1, id: 2 },
        { text: 'Make Awesome App', priority: 2, id: 3 },
        { text: 'Have a lunch', priority: 3, id: 4 }
    ];

    return (
        <div className="app">
            <TopPanel />
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-3">
                        <LeftPanel />
                    </div>
                    <div className="col-9">
                        <List items={ items } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
