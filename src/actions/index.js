import { Images } from '../components';

const loadImages = () => ({
    type: Images.LOAD,
});

const setImages = images => ({
    type: Images.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: Images.LOAD_FAIL,
    error,
});

export { loadImages, setImages, setError };
