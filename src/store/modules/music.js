
const music = {
	state:{ // 状态管理数据存放
		user: "",
		music_list: [
		    { "id": 1, "music_name": "昨日青空", "singer": "尤长靖", "music_url": "../../static/song/尤长靖%20-%20昨日青空.mp3" },
		    { "id": 2, "music_name": "山外小楼夜听雨", "singer": "任然", "music_url": "../../static/song/任然 - 山外小楼夜听雨.mp3" }
		]
	},
	mutations:{ // 状态管理修改方法
		SETUSER(state, user) {
		    state.user = user;
		},
		SETLUSICLIST(state, music_list) {
		    state.music_list = music_list;
		}
	},
	actions:{ // 状态管理数据获取
		setStateUser(context, user) {
		    context.commit("SETUSER", user);
		},
		setStateMusicList(context, music_list) {
		    context.commit("SETLUSICLIST", music_list);
		}
	}
}

