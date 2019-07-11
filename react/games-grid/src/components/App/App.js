import React, { Component } from 'react';
import Header from '../common/Header/Header';
import Main from '../common/Main/Main';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;