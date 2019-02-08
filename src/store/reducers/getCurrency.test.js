import reducer from './getCurrency';
import * as actionTypes from '../actions/actionTypes';

describe('Get currency reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            currentData: null,
            currencyList: null,
            loading: true,
            error: null
        });
    });;

    it('after initializing it should get data and stops loading spinner ', () => {
        expect(reducer({
            currentData: null,
            currencyList: null,
            loading: true,
            error: null
        }, {
            type: actionTypes.GET_CURRENCY_LIST_SUCCESS,
            currencyList: { data: 'some data'},
        })).toEqual({
            currentData:  null,
            currencyList: { data: 'some data'},
            loading: false,
            error: null
        });
    });

    it('after initializing it should get data and stops loading spinner ', () => {
        expect(reducer({
            currentData: null,
            currencyList: null,
            loading: true,
            error: null
        }, {
            type: actionTypes.GET_CURRENCY_RATES_SUCCESS,
            currentData: { data: 'some data'},
        })).toEqual({
            currentData: { data: 'some data'},
            currencyList:  null,
            loading: false,
            error: null
        });
    });

    it('it should set erorr message and stops spinner if there is an error after initializing', () => {
        expect(reducer({
            currentData: null,
            currencyList: null,
            loading: true,
            error: null
        }, {
            type: actionTypes.GET_CURRENCY_LIST_FAIL,
            error: { error: 'some error'}
        })).toEqual({
            currentData: null,
            currencyList: null,
            loading: false,
            error: { error: 'some error'}
        });
    });
});