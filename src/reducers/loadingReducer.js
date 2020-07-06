import { Images } from '../constants';

const loadingReducer = (state = [], action) => {
    switch (action.type) {
        case Images.LOAD:
            return true;
        case Images.LOAD_SUCCESS:
            return false;
        case Images.LOAD_ERROR:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
