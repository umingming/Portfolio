import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import SkillView from "../views/SkillView.vue";
import ProjectView from "../views/ProjectView.vue";
import ContactView from "../views/ContactView.vue";

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
        {
            path: "/skill",
            name: "SkillView",
            component: SkillView,
        },
        {
            path: "/project",
            name: "ProjectView",
            component: ProjectView,
        },
        {
            path: "/contact",
            name: "ContactView",
            component: ContactView,
        },
    ],
});
