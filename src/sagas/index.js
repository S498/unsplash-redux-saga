import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import { all } from 'redux-saga/effects';
// function* handleImagesLoad() {
// }
// //Watcher Saga
// function* rootSaga() {
//     yield takeEvery(Images.LOAD, handleImagesLoad);
// }

// export default rootSaga;

function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}

export default rootSaga;
