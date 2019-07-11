import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {

    render() {
        return (
            <Fragment>
                <header className="header">
                    <span>React Game Grid</span>
                </header>
            </Fragment>
        );
    }
}

export default Header;
