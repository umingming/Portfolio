import { createStore } from "vuex";

export default createStore({
    state: {
        viewport: { top: 0, bottom: 0 },
    },
    getters: {
        viewportTop(state): number {
            return state.viewport.top;
        },
        viewportBottom(state): number {
            return state.viewport.bottom;
        },
        inViewport(state) {
            const { bottom, top } = state.viewport;
            return (offsetTop: number, offsetBottom: number): boolean =>
                offsetTop <= bottom && offsetBottom >= top;
        },
    },
    actions: {
        SET_VIEWPORT({ commit }, { pageYOffset, outerHeight }) {
            const top: number = pageYOffset;
            const bottom: number = top + outerHeight;
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
