import React, { useEffect } from 'react';

const ScrollUpButton = () => {
    useEffect(() => {
        const handleScroll = () => {
            const topButton = document.getElementById("topScrollButton");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <button 
            id="topScrollButton" 
            className="fixed-bottom btn btn-primary end-0" 
            onClick={scrollToTop}
        >
            ↑ Scroll up
        </button>
    );
};

export default ScrollUpButton;
