import React, { Component } from 'react';
import Header from '../../components/UI/Header/Header';
import Table from '../../components/UI/Table/Table';

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