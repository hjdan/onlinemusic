import request from '@/utils/request'

export function adminLogin(username,password){
	return request({
		url:'/api/v1/admins/login',
		method:'post',
		data:{
			admin_account:username,
			admin_password:password
		}
	})
}