import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App () {
    return (
        <div className='App-main'>
            <h1>Hello World!</h1>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
