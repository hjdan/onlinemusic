import {adminLogin} from '@/api/admin'

const admin = {
	state:{ 
		token:''
	},
	
	mutations:{
		SET_ADMIN:(state,token) => {
			state.token = token
		}
	},
	
	actions:{
		// 登陆
		Login({commit},admin){
			const username = admin.username.trim() // 账号去空格
			return new Promise((resolve, reject) => {
				adminLogin(username,admin.password)
				.then(res => {
					let data = res.data
					let token = res.token
					console.log(token)
					commit('SET_ADMIN',token)
					resolve(data)
				})
				.catch(err => {
					reject(err)
				})
			})
		}
	}
}

export default admin