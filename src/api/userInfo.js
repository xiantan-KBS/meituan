import axios from '@/axios';

// const baseurl = 'https://open.duyiedu.com';

// async function fetchData(url, params) {
//     const resp = await axios.get(baseurl + url, {
//         params: {
//             ...params,
//             appkey: 'xioabai_1647937979681',
//         }
//     });
//     return resp.data;
// }

export function login(options) {
    return axios.get('/api/meituan/login', options);
}

export function validate(options) {
    return axios.get('/api/meituan/login', options);
}