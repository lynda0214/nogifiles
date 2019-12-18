import React from 'react';
import './DrawerToggleButton.css';
import './hamburgers.css';

const drawerToggleButton = props => {

    let hamburgerClasses = ['hamburger', 'hamburger--spring'];
    if (props.show) {
        hamburgerClasses = ['hamburger', 'hamburger--spring', 'is-active'];
    }
    return (
        <div className={hamburgerClasses.join(" ")} onClick={props.click} >
            <div className="hamburger-box">
                <div className="hamburger-inner"></div>
            </div>
        </div>
    );
};

export default drawerToggleButton;