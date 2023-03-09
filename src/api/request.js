import axios from "axios";

// 创建 axios 实例，设置 baseUrl，请求拦截器，响应拦截器
const https = axios.create({
    baseURL: "http://127.0.0.1:3333"
})

https.interceptors.request.use(config => {
    return config
})

https.interceptors.response.use(res => {
    return res
},error => {
    return Promise.reject(error)
})

export default https