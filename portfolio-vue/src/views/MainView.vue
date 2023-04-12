<template>
    <section class="main">
        <div class="slide">
            <main-slide></main-slide>
            <main-hits></main-hits>
        </div>
        <div class="content">
            <main-intro ref="main-intro"></main-intro>
            <main-skill ref="main-skill"></main-skill>
            <main-project ref="main-project"></main-project>
            <main-contact ref="main-contact"></main-contact>
        </div>
    </section>
</template>

<script>
import MainSlide from "@/components/main/MainSlide.vue";
import MainHits from "@/components/main/MainHits.vue";
import MainIntro from "@/components/main/MainIntro.vue";
import MainSkill from "@/components/main/MainSkill.vue";
import MainProject from "@/components/main/MainProject.vue";
import MainContact from "@/components/main/MainContact.vue";
export default {
    name: "MainView",
    components: {
        MainSlide,
        MainHits,
        MainIntro,
        MainSkill,
        MainProject,
        MainContact,
    },
    mounted() {
        window.addEventListener("scroll", this.updateViewport);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.updateViewport);
    },
    methods: {
        updateViewport() {
            const contents = Object.values(this.$refs);
            const pageTop = window.pageYOffset;
            const pageBottom = pageTop + window.outerHeight;

            contents.forEach((i) => {
                const top = i.$el.offsetTop;
                const bottom = top + i.$el.offsetHeight;
                i.inViewport = top < pageBottom && bottom > pageTop;
            });
        },
    },
};
</script>

<style></style>
