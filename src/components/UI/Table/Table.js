import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner/Spinner';

export class Table extends Component {

    render() {

        let results = [];
        let tableScreen = null;

        if (!this.props.resultsLoading && this.props.results !== null && this.props.resultsError == null) {
            results = null;
            let units = [];
            let percent = [];            
            let proportion = this.props.results.map( rez=> rez.CcyAmt[1].Amt[0] );
            let date = this.props.results.map(rez => rez.Dt[0] );

            for(let i = 0; i<=proportion.length; i++) {
                units.push((proportion[i] - proportion[i+1]).toFixed(4));
                percent.push(((units[i] / proportion[i+1]) * 100).toFixed(4));
            }        

            proportion.pop();
            date.pop();

            results = proportion.map(( rslt, index) => 
                <tr key={index} ><td>{date[index]}</td><td>{rslt}</td><td>{units[index]}</td><td>{percent[index]}</td></tr>
            );

            tableScreen = (
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Proportion</th>
                        <th scope="col">Change</th>
                        <th scope="col">Change %</th>
                        </tr>
                    </thead>
                    <tbody className="table-results">
                        {results}
                    </tbody>              
                </table>
            );

        } else if (!this.props.resultsLoading && this.props.currentData !== null && this.props.resultsError == null) {
            
            let currencyCode = {};
            let currencyRate = {};
            let list = {};
            
            for (let i = 0; i <= this.props.currentData.length-1; i++) {
                currencyCode[this.props.currentData[i].Ccy[0]] = this.props.currentData[i].CcyNm[1]._;
            }  
            
            for (let i = 0; i <= this.props.currencyListData.length-1; i++) {
                currencyRate[this.props.currencyListData[i].CcyAmt[1].Ccy[0]] = this.props.currencyListData[i].CcyAmt[1].Amt[0];
            }

            Object.keys(currencyRate).forEach(function (key, index) {
                list[index] = [currencyCode[key], [key], currencyRate[key]];                
            });
            
            Object.keys(list).forEach(function (key) {
                 results.push(<tr key={key}><td>{list[key][0]}</td><td>{list[key][1][0]}</td><td>{list[key][2]}</td></tr>);                
            });
            
            tableScreen = (
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Currency name</th>
                        <th scope="col">Currency code</th>
                        <th scope="col">Proportion</th>
                        </tr>
                    </thead>
                    <tbody className="table-results">
                        {results}
                    </tbody>              
                </table>
            );
        } else if (this.props.resultsError) {
            tableScreen = <ErrorMessage/>;
        } else {
            tableScreen = <Spinner/>;
        }

        return(
            <div className="currencyInfoblock-table">
                {tableScreen}
            </div> 
        );
    }
};

const mapStateToProps = state => {
    return {
        results: state.results.data,
        resultsLoading: state.results.loading,
        resultsError: state.results.error,
        currentData: state.currencyList.currentData,
        currencyListData: state.currencyList.currencyList        
    };
}

export default connect(mapStateToProps)(Table);