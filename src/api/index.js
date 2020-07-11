const key = 'e4fc0497bfd1712642dbf7fbcfbc1e53c44d09cdf47ea0a95bbe1a3aa11d429c';
const url = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
    const response = await fetch(
        `${url}?client_id=${key}&per_page=3&page=${page}`,
    );
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async id => {
    const response = await fetch(`${url}/${id}/statistics?client_id=${key}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };
