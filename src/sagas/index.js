import { take, put, call, takeEvery } from 'redux-saga/effects';
import { Images } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}
//Watcher Saga
function* rootSaga() {
    yield takeEvery(Images.LOAD, handleImagesLoad);
}

export default rootSaga;
