const { Stats } = require('../constants');

const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case Stats.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false,
                },
            };
        case Stats.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false,
                },
            };
        case Stats.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true,
                },
            };

        default:
            return state;
    }
};

export default statsReducer;
