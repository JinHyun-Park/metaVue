import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant'
// import axios from 'axios';       //11.6에서 주석
import module1 from './module1'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // contacts: []
        keywordlist: []
    },
    mutations: {
        // [Constant.SEARCH_CONTACT]: (state, payload) => {
        //     state.contacts = payload.contacts;
        // }
        [Constant.ADD_KEYWORD]: (state, payload) => {
            state.keywordlist.splice(0, 0, payload.name);
        }
    },
    actions: {
        // [Constant.SEARCH_CONTACT]: (store, payload) => {
        //     axios.get(Constant.BASE_URL + payload.name)
        //         .then((response) => {
        //             store.commit(Constant.SEARCH_CONTACT, { contacts: response.data })
        //         })
        // }
        [Constant.ADD_KEYWORD]: (store, payload) => {
            store.commit(Constant.ADD_KEYWORD, payload);
        }
    },
    modules: { m1: module1 }
})

export default store;