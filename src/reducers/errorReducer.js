import { Images } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case Images.LOAD_FAIL:
            return action.error;
        case Images.LOAD_SUCCESS:
            return null;
        case Images.Load:
        default:
            return state;
    }
};

export default errorReducer;
