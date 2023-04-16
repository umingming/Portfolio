<template>
    <section class="about">
        <base-slide :index="0"></base-slide>
        <main-intro></main-intro>
    </section>
</template>

<script>
import BaseSlide from "@/components/base/BaseSlide.vue";
import MainIntro from "@/components/main/MainIntro.vue";
export default {
    name: "AboutView",
    components: {
        BaseSlide,
        MainIntro,
    },
};
</script>

<style></style>
