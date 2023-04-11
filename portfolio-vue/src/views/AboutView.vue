<template>
    <section class="about">
        <base-slide :index="0"></base-slide>
        <about-intro></about-intro>
    </section>
</template>

<script>
import BaseSlide from "@/components/base/BaseSlide.vue";
import AboutIntro from "@/components/about/AboutIntro.vue";
export default {
    name: "AboutView",
    components: {
        BaseSlide,
        AboutIntro,
    },
};
</script>

<style></style>
