import React, { Component } from 'react';
// import axios from 'axios';
// import $ from 'jquery';
import Header from '../../components/UI/Header';
import Table from '../../components/UI/Table';

import './Home.scss';

class Home extends Component {
    constructor() {
        super();
        this.state = {
          currentFxRates: []
        }
      }

    render() {
       
        return(
            <div className="currencyInfoblock">
                <Header/>
                <Table/> 
            </div>
        );
    }

}

export default Home;