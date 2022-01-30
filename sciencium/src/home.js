// Imports
import React from 'react';
import './home.css';

// Import components from component folder, add to HomePage function 
function HomePage () {
    return (
        <>
            {/* bgImageContainer is supposed to change the background image for a set time interval. Will be implemented soon. */}
            
            {/*
            <div class="bgImageContainer">
                <img class="current" src="old.png"/>
                <img class="next" src="new.png"/>
            </div>
            */}

            <div className='meta-div'>
                <div>
                    <div className="text">
                        <h1 className='header-text'>
                        Welcome to <br/> Sciencium, <br/> the best <br/> learning webpage!
                        </h1>
                        Start reading our <br/> website material to <br/> learn more about science!
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;