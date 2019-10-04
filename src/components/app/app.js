import React from 'react';
import TopPanel from '../top-panel';
import List from '../list';
import './app.css';

const App = () => {
    return (
        <div>
            <TopPanel />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <List />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
