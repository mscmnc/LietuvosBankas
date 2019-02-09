import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../UI/ErrorMessage';
import Spinner from '../UI/Spinner';
import * as actions from '../../store/actions/index';
import Button from '../UI/Button';
import Input from '../UI/Input';


export class Navigation extends Component {

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
            <div size="10" className="infoBlock-navigation-block--currency-box" >
                <select className="currency-box-results" id='currencySymbol' onChange={this.currencyChange}>
                    <option >Currency</option>
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
            <div className="infoBlock-navigation">
                <div className="infoBlock-navigation-block">
                    <Input className="infoBlock-navigation-block--calendarFrom" type="date" id="dateFrom" onChange={this.dateFromChange}/>   
                    <Input className="infoBlock-navigation-block--calendarTo" type="date" id="dateTo" onChange={this.dateToChange}/>
                    <div className="infoBlock-navigation-block--currency">
                        {screen}
                    </div>
                    <Button className="infoBlock-navigation-block--button" type="submit" title="Search" onClick={this.GetResults} disabled={!this.state.dateFrom || !this.state.dateTo || !this.state.currency}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);