import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getCurrencyList = () => {
    return {
        type: actionTypes.GET_CURRENCY_LIST_START
    };
};

export const getCurrencySuccess = (data) => {
    return {
        type: actionTypes.GET_CURRENCY_LIST_SUCCESS,
        data: data,
        loading: false
    };
};

export const getCurrencyFail = (error) => {
    return {
        type: actionTypes.GET_CURRENCY_LIST_FAIL,
        error: error,
        loading: false
    };
};

export const getCurrencyStart = () => {
    return dispatch => {
        dispatch(getCurrencyList());
        let parseString = require('xml2js').parseString;
        axios({
            method: "GET",
            url: `${'https://cors-anywhere.herokuapp.com/'}http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrentFxRates?tp=eu`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }).then (function (response) {
            parseString(response.data, function (err, data) {   
                dispatch(getCurrencySuccess(data.FxRates.FxRate))
            }); 
        }).catch (error => {
            console.log(error);
            dispatch(getCurrencyFail(error));
        });
    }

}
