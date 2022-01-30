// Imports
import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import HomePage from './home.js';
import './index.css';

// Main App, contains all the information shown on the screen.
function App () {
    return (
        <HomePage/>
    );
}

// Rendering
ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById('root')
)