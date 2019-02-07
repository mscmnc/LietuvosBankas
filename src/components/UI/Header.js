import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../UI/ErrorMessage';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {dateFrom: '', dateTo: '', currency: ''};
        this.dateFromChange = this.dateFromChange.bind(this);
        this.dateToChange = this.dateToChange.bind(this); 
        this.currencyChange = this.currencyChange.bind(this);  
    }

    dateFromChange(e) {
        this.setState({dateFrom: e.target.value});
     }

    dateToChange(e) {
        this.setState({dateTo: e.target.value});
    }

    currencyChange(e) {
        this.setState({currency: e.currentTarget.value});
    }

    componentDidMount() {
        this.props.onGetCurrencyList();        
    };

    GetResults = (e) => {
        e.preventDefault();  
        this.props.onGetResults(this.state.currency, this.state.dateFrom, this.state.dateTo)
    };


    render () {
        let currencyListData = null;
        let screen = <Spinner/>;

        if (!this.props.loading && this.props.currencyListData !== null && this.props.error == null) {
            currencyListData = this.props.currencyListData.map(( list, index) => 
                <option key={index}  value={list.CcyAmt[1].Ccy[0]}>{list.CcyAmt[1].Ccy[0]}</option>
            );

            screen = (
                <div size="10" className="currency-select-box" >
                    <select className="select-box-results" id='currencySymbol' onChange={this.currencyChange}>
                        <option value={'USD'}>Jūsų pasirinkimas</option>
                        {currencyListData} 
                    </select>
                </div>
            );

        } else if (!this.props.loading) {
            screen = <ErrorMessage/>
        } else {
            screen = <Spinner/>;
        }


  


        return (
        <div className="currencyInfoblock-header">
            <div className="currencyInfoblock-header--text" >
                <h2>Euro ir užsienio valiutų santykiai</h2>
            </div>
            <div className="currencyInfoblock-selectbox">
                <div className="currency-box"><h2>Pasirinkti valiutą:</h2>
                    {screen}
                </div>
                
                <div className="currency-box">
                    <h3>Pasirinkti periodą:</h3>
                    <div className="currency-select-date" >
      
                        <div className="currency-select-date-box">
                            <span>NUO </span>
                            <input type="date" id="dateFrom" onChange={this.dateFromChange}></input>
                        </div>
                        <div className="currency-select-date-box"> 
                            <span>IKI </span>
                            <input type="date" id="dateTo" onChange={this.dateToChange} ></input>
                        </div> 
                        <div>
                            <button onClick={this.GetResults} disabled={!this.state.currency || !this.state.dateTo || !this.state.dateFrom }  > Search</button>
                        </div>
                    </div>  
                </div>
            </div>  
        </div>
        
        );
    }
} 

const mapStateToProps = state => {
    return {
        currencyListData: state.currencyList.currencyList,
        loading: state.currencyList.loading,
        error: state.currencyList.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetCurrencyList: () => dispatch(actions.getCurrencyStart()),
        onGetResults: (currency, dateFrom, dateTo) => dispatch(actions.getResultsStart(currency, dateFrom, dateTo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);