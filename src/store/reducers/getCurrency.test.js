import reducer from './getCurrency';
import * as actionTypes from '../actions/actionTypes';

describe('Get currency reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: null,
            loading: true,
            error: null
        });
    });;

    it('after initializing it should get data and stops loading spinner ', () => {
        expect(reducer({
            data: null,
            loading: true,
            error: null
        }, {
            type: actionTypes.GET_CURRENCY_LIST_SUCCESS,
            data: { data: 'some data'}
        })).toEqual({
            data: { data: 'some data'},
            loading: false,
            error: null
        });
    });
    it('it should set erorr message if there is an error after initializing', () => {
        expect(reducer({
            data: null,
            loading: true,
            error: null
        }, {
            type: actionTypes.GET_CURRENCY_LIST_FAIL,
            error: { error: 'some error'}
        })).toEqual({
            data: null,
            loading: false,
            error: { error: 'some error'}
        });
    });
});