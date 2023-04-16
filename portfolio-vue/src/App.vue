<template>
    <div id="app wrap">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { mapActions } from "vuex";
export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter,
    },
    watch: {
        $route() {
            this.initView();
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateViewport);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.updateViewport);
    },
    methods: {
        ...mapActions(["SET_VIEWPORT"]),
        initView() {
            window.scrollTo(0, 0);
        },
        updateViewport() {
            const { pageYOffset, outerHeight } = window;
            this.SET_VIEWPORT({ pageYOffset, outerHeight });
        },
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0.7;
}
</style>
