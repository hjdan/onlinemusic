<template>
	<div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="用户名" prop="user_account">
			</el-table-column>
			<el-table-column label="密码" prop="user_password">
			</el-table-column>
			<el-table-column label="邮箱" prop="email">
			</el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="修改用户信息" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="用户名" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.user_account"></el-input>
				</el-form-item>
				<el-form-item label="密码" :label-width="formLabelWidth" >
					<el-input autocomplete="off" v-model="form.user_password"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.email"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="changeTable">确 定</el-button>
			</div>
		</el-dialog>
		<el-pagination middle layout="prev, pager, next" :total="50" align="right">
		</el-pagination>
	</div>
</template>
<script>
	import { Message, MessageBox } from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'
	import request from '@/utils/request' // 引入请求
	export default {
		data() {
			return {
				tableData: [],
				search: '',
				dialogFormVisible: false,
				form: {},
				formLabelWidth: '120px'
			}
		},
		computed: { // 从vuex中获取token
			
		},
		methods: {
			handleEdit(index, row) {
				this.form = row
				this.dialogFormVisible = true
			},
			handleDelete(index, row) {
				console.log(index, row);
				console.log(row.id)
				request({
					url:'/api/v1/users',
					method:'delete',
					data:{
						user_id:row.id,
						token:this.$store.getters.getState.admin_token
					}
				})
				.then(() => {
					Message({
						message: '删除成功',
						type: 'success',
						duration: 2 * 1000
					})
					let index = this.tableData.findIndex(value => { // 获取删除元素index
						return value == row.id
					})
					this.tableData.splice(index,1) // 根据index删除数组内容
				})
			},
			changeTable(){
				
				request({
					url:'/api/v1/users',
					method:'put',
					data:{
						user_id:this.form.id,
						user_account:this.form.user_account,
						user_password:this.form.user_password,
						email:this.form.email,
						token:this.$store.getters.getState.admin_token
					}
				})
				.then(() => {
					Message({
						message: '修改成功',
						type: 'success',
						duration: 2 * 1000
					})
					this.dialogFormVisible = false
				})
			}
		},
		created() { // 生命周期
		console.log(this.$store.getters.getState.admin_token)
			request({
				url:'/api/v1/users',
				method:'get',
				params:{
					offset:0,
					limit:10,
					token:this.$store.getters.getState.admin_token
				},
			})
			.then(res => { 
				let data = res.data
				data.forEach((item,index,array) => {
					this.tableData.push(item)
				})
				console.log(this.tableData)
			})
			.catch(err => {
				console.log(err)
			})
		}
	}
</script>
<style>

</style>
