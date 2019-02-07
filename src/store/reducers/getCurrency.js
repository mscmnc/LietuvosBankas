import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentData: null,
    currencyList: null,
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENCY_LIST_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_CURRENCY_LIST_SUCCESS:
            return {
                ...state,
                currencyList: action.currencyList,
                loading: false,
                error: null
            };
        case actionTypes.GET_CURRENCY_RATES_SUCCESS:
            return {
                ...state,
                currentData: action.currentData,
                loading: false,
                error: null
            };
        case actionTypes.GET_CURRENCY_LIST_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;