import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/main",
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
});
