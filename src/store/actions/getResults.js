import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getResults = () => {
    return {
        type: actionTypes.GET_RESULTS_START
    };
};

export const getResultsSuccess = (data) => {
    return {
        type: actionTypes.GET_RESULTS_SUCCESS,
        data: data,
        loading: false
    };
};

export const getResultsFail = (error) => {
    return {
        type: actionTypes.GET_RESULTS_FAIL,
        error: error,
        loading: false
    };
};

export const getResultsStart = (currency, dateFrom, dateTo) => {
    return dispatch => {
        dispatch(getResults());
        let parseString = require('xml2js').parseString;
        axios({
            method: "GET",
            url: `${'https://cors-anywhere.herokuapp.com/'}http://old.lb.lt/webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=eu&ccy=${currency}&dtFrom=${dateFrom}&dtTo=${dateTo}`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }).then (function (response) {
            parseString(response.data, function (err, data) {   
                console.log(data.FxRates.FxRate);
                dispatch(getResultsSuccess(data.FxRates.FxRate))
            }); 
        }).catch (error => {
            console.log(error);
            dispatch(getResultsFail(error));
        });
    }

}
