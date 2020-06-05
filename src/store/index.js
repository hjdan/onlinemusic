import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态管理数据存放
let state = {
        user_info: null,
        music_list: [],
        music_info: null,
        admin_token: null
    }
    //状态管理数据获取
const getters = {
        getState(state) {
            return state;
        }
    }
    //状态管理修改方法
const mutations = {
        SETUSER(state, user_info) {
            state.user_info = user_info;
        },
        SETMUSICLIST(state, music_list) {
            state.music_list = music_list;
        },
        SETMUSICINFO(state, music_info) {
            state.music_info = music_info;
        },
        SETADMINTOKEN(state, admin_token) {
            state.admin_token = admin_token;
        }
    }
    //状态管理修改请求
const actions = {
    setStateUser(context, user) {
        context.commit("SETUSER", user);
    },
    setStateMusicList(context, music_list) {
        context.commit("SETMUSICLIST", music_list);
    },
    setStateMusicInfo(context, music_info) {
        context.commit("SETMUSICINFO", music_info);
    },
    setStateAdminToken(context, admin_token) {
        context.commit("SETADMINTOKEN", admin_token);
    }
};

// 注册到Vuex的Store里面
let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
export default store