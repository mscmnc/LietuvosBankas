import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getCurrencyList = () => {
    return {
        type: actionTypes.GET_CURRENCY_LIST_START
    };
};

export const getCurrencyListSuccess = (data) => {
    return {
        type: actionTypes.GET_CURRENCY_LIST_SUCCESS,
        currencyList: data

    };
};

export const getCurrencyRatesSuccess = (data) => {
    return {
        type: actionTypes.GET_CURRENCY_RATES_SUCCESS,
        currentData: data

    };
};

export const getCurrencyFail = (error) => {
    return {
        type: actionTypes.GET_CURRENCY_LIST_FAIL,
        error: error
    };
};

export const getCurrencyStart = () => {
    return dispatch => {
        dispatch(getCurrencyList());
        let parseStringList = require('xml2js').parseString;
        let parseString = require('xml2js').parseString;
        axios.all([
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrentFxRates?tp=eu`),
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrencyList`)
          ])
          .then(axios.spread((currentRates, allCurrencies) => {
            parseStringList(currentRates.data, function (err, data) {
             dispatch(getCurrencyListSuccess(data.FxRates.FxRate))
            });
            parseString(allCurrencies.data, function (err, data) { 
                dispatch(getCurrencyRatesSuccess(data.CcyTbl.CcyNtry))
            });
            
          })).catch (error => {
            dispatch(getCurrencyFail(error));
            });
        
    }

}
