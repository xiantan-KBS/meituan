import axios from "axios";

//axios获取数据
async function fetchData(url) {
    const resp = await axios.get(url);
    return resp.data.data;
}
export function getMenu() {
    return fetchData('/api/menu');
}


export function getCarousel() {
    return fetchData('/api/carousel');
}

export function getMovie() {
    return fetchData('/api/movie');
}

export function getHouse() {
    return fetchData('/api/house');
}

export function getHouseCity() {
    return fetchData('/api/houseCity');
}

export function getRecommend() {
    return fetchData('/api/recommend');
}

export function getCity() {
    return fetchData('/api/city');
}

export function getHotCity() {
    return fetchData('/api/hotCity');
}

export function getFilterCity() {
    return fetchData('/api/filterCity');
}

export function getClassify() {
    return fetchData('/api/classify');
}

export function getArea() {
    return fetchData('/api/area');
}

export function getLikes() {
    return fetchData('/api/likes');
}


export function getProducts() {
    return fetchData('/api/products');
}