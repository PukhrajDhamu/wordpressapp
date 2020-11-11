import axios from 'axios';
let api = null;

export function initializeAxios() {
    api = axios.create({
        baseURL: 'https://getindian.online/news-portal',
        timeout: 10000,
      });
}
export function getApi() {
    if(!api) {
        initializeAxios();
    }
    return api;
}
