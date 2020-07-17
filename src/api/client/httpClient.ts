import axios from 'axios';
const instance = axios.create();
// 超长超时时间
instance.defaults.timeout = 15000;

// 请求封装
instance.interceptors.request.use(function (config) {
	return config;
}, function (error) {

	return Promise.reject(error);
});

// 返回封装
instance.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	return Promise.reject(error);
});
export default instance;