import React from 'react';

const ScrollIcon = ({activePage}) => {
    
    let modifier = "";
    if (activePage === "stuff") {
        modifier = "scroll-icon--dark";
    } else if (activePage === "sayhi") {
        modifier = "scroll-icon--up";
    } 
    
    return (
        <div className={`scroll-icon ${modifier}`} >
        <div className="scroll-icon__mousey">
            <div className="scroll-icon__mousey__scroller"/>
        </div>
        </div>
    )
}

export default ScrollIcon;