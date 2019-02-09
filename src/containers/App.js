import React, { Component } from 'react';
import Header from '../components/UI/Header'
import Navigation from '../components/Navigation/Navigation';
import Table from '../components/Table/Table';

import '../assets/css/main.css';


class App extends Component {
    render() {
        return (
            <div className="infoBlock">
                <Header text="Daily euro foreign exchange reference rates"/>
                <Navigation/>
                <Table/> 
            </div>
        );
    }
}

export default App;
