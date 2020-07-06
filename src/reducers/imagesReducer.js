import { Images } from '../constants';

const imagesReducer = (state = [], action) => {
    if (action.type === Images.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;
