import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton show={props.show} click={props.drawerClickHandler} />
                </div>
                <div className="toolbar__logo fontJulius"><Link to="/">◢ Nogifiles</Link></div>
            </nav>
        </header>
    );
}

export default toolbar;