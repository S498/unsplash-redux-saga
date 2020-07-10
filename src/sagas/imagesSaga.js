import { takeEvery } from 'redux-saga';
import { Images } from '../constants';
import { select, call, put } from 'redux-saga/effects';
import fetchImages from '../api';
import { setImages, setError } from '../actions';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        // dispatch the error
        console.log(error);
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(Images.LOAD, handleImagesLoad);
}
