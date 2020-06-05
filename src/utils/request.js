import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// import store from '../store'

// 跨域
axios.defaults.withCredentials = true

// 创建axios实例
const service = axios.create({
	baseURL: 'http://localhost:3000', // api 的 base_url
	timeout: 5000 // 请求超过时间
})

// response 拦截器
service.interceptors.response.use(
	response => {
		const res = response.data
		console.log(res)
		if(res.code !== 0){ //返回的code不是 0 则抛出错误
			Message({
				message: res.message,
				type:'error',
				duration:5*1000
			})
			return Promise.reject('error') // 将错误传给reject
		} else{ // 是200 则返回数据
			return response.data
		}
	},
	error => { // 请求错误处理
		console.log('err' + error)
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(error) // 将错误传给reject
	}
)

export default service