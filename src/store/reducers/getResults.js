import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESULTS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_RESULTS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null
            };
        case actionTypes.GET_RESULTS_FAIL:
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