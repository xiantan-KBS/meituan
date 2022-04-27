import axios from 'axios'
axios.defaults.baseURL = 'https://study.duyiedu.com'
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if (localStorage.token) {

    }
    console.log(config)
    config.params = {
        ...config.params,
        appkey: 'xioabai_1647937979681'
    }
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

export default axios