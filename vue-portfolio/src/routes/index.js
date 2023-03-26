import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/main",
        },
        {
            path: "/main",
            name: "MainView",
            component: MainView,
        },
        {
            path: "/about",
            name: "AboutView",
            component: AboutView,
        },
    ],
});
