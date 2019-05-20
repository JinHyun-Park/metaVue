import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todolist: [
            { id: 1, todo: "영화보기", done: false },
            { id: 2, todo: "주말 산책", done: false },
            { id: 3, todo: "야구 보기", done: false },
            { id: 4, todo: "잠실 야구장", done: false }
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            state.todolist[payload.index].done = !state.todolist[payload.index].done;
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist.splice(payload.index, 1);
        }
    }
})

export default store;