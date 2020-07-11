import { Images, Stats } from '../constants';

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
const loadImageStats = id => ({
    type: Stats.LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: Stats.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: Stats.LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
