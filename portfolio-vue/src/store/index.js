import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        scrollY: 0,
    },
    getters: {
        getScrollY(state) {
            return state.scrollY;
        },
    },
    actions: {
        SET_SCROLL_Y({ commit }, y) {
            commit("SET_SCROLL_Y", y);
        },
    },
    mutations: {
        SET_SCROLL_Y(state, y) {
            state.scrollY = y;
        },
    },
});
