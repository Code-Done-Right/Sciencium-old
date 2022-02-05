import React from 'react';
import '../styles/pages/Courses.css';

function Courses () {
    return (
        <div className='courses-page'>
            <div className='welcome-header-wrapper'>
                <h1 className='welcome-header'>Welcome to Courses!</h1>
                This feature is currently in development, A separate navbar will be added for this.
                <a href='/'>
                    Go back to Home page
                </a>
            </div>
        </div>
    );
}

export default Courses;