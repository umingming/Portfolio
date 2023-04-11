<template>
    <section class="skill">
        <base-slide :index="2"></base-slide>
        <main-project></main-project>
    </section>
</template>

<script>
import BaseSlide from "@/components/base/BaseSlide.vue";
import MainProject from "@/components/main/MainProject.vue";
export default {
    name: "ProjectView",
    components: {
        BaseSlide,
        MainProject,
    },
    data() {
        return {};
    },
};
</script>

<style></style>
