import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        viewport: { top: 0, bottom: 0 },
    },
    getters: {
        viewportTop(state) {
            return state.viewport.top;
        },
        viewportBottom(state) {
            return state.viewport.bottom;
        },
        inViewport(state) {
            return (offsetTop, offsetBottom) =>
                offsetTop <= state.viewport.bottom &&
                offsetBottom >= state.viewport.top;
        },
    },
    actions: {
        SET_VIEWPORT({ commit }, { pageYOffset, outerHeight }) {
            const top = pageYOffset;
            const bottom = top + outerHeight;
            commit("SET_VIEWPORT", { top, bottom });
        },
    },
    mutations: {
        SET_VIEWPORT(state, { top, bottom }) {
            state.viewport.top = top;
            state.viewport.bottom = bottom;
        },
    },
});
