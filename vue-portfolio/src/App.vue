<template>
    <div id="app wrap">
        <app-header></app-header>
        <main-view></main-view>
        <about-view></about-view>
        <skill-view></skill-view>
        <project-view></project-view>
        <contact-view></contact-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import MainView from "@/views/MainView.vue";
import AboutView from "@/views/AboutView.vue";
import SkillView from "@/views/SkillView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactView from "@/views/ContactView.vue";
export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter,
        MainView,
        AboutView,
        SkillView,
        ProjectView,
        ContactView,
    },
};
</script>

<style></style>
