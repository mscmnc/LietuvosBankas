import reducer from './getResults';
import * as actionTypes from '../actions/actionTypes';

describe('Get currency reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: null,
            loading: false,
            error: null
        });
    });;

    it('after success axios calling, it should get some data', () => {
        expect(reducer({
            data: null,
            loading: false,
            error: null
        }, {
            type: actionTypes.GET_RESULTS_SUCCESS,
            data: { data: 'some data'}
        })).toEqual({
            data: { data: 'some data'},
            loading: false,
            error: null
        });
    });
    it('it should set erorr message if there is an error', () => {
        expect(reducer({
            data: null,
            loading: false,
            error: null
        }, {
            type: actionTypes.GET_RESULTS_FAIL,
            error: { error: 'some error'}
        })).toEqual({
            data: null,
            loading: false,
            error: { error: 'some error'}
        });
    });
});