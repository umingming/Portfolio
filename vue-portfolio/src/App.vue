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
export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter,
    },
    watch: {
        $route() {
            this.updateView();
        },
    },
    methods: {
        updateView() {
            window.scrollTo(0, 0);
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
