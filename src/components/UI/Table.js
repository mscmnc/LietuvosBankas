import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../UI/ErrorMessage';
import Spinner from '../UI/Spinner/Spinner';

class Table extends Component {




    render() {

        let results = null;
        let tableScreen = null;

        if (!this.props.resultsLoading && this.props.results !== null && this.props.resultsError == null) {
            
            var aarray = this.props.results.map((rez, index)=>
                   rez.CcyAmt[1].Ccy[0]
             );
             console.log(aarray);
            
            results = this.props.results.map(( rslt, index) => 
            <tr key={index} ><td>{rslt.Dt[0]}</td><td>{rslt.CcyAmt[1].Amt[0]}</td><td>-</td><td>-</td></tr>
            );

            tableScreen = (
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Santykis</th>
                        <th scope="col">Pokytis vnt.</th>
                        <th scope="col">Pokytis %</th>
                        </tr>
                    </thead>
                    <tbody className="table-results">
                        {results}
                    </tbody>              
                </table>

            );

        } else if (this.props.resultsLoading) {
            tableScreen = <Spinner/>
        } else if (this.props.resultsError) {
            tableScreen = <ErrorMessage/>
        } else {
            tableScreen = null;
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
        resultsError: state.results.error
    };
}


export default connect(mapStateToProps)(Table);