import React from 'react';

const ScrollUpButton = () => {
    const scrollUp = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <button id="topScrollButton" className="fixed-bottom btn btn-primary end-0" onClick={scrollUp}>
            ↑ Scroll up
        </button>
    );
};

export default ScrollUpButton;
