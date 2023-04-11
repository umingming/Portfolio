<template>
    <section class="main">
        <main-slide></main-slide>
        <main-hits></main-hits>
        <main-intro></main-intro>
        <main-skill></main-skill>
        <main-project></main-project>
        <main-contact></main-contact>
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
    data() {
        return {
            index: 0,
            slideDuration: 10000,
            slideInterval: null,
        };
    },
    computed: {
        slideIndex() {
            return this.index;
        },
    },
    created() {
        this.initSlide();
    },
    methods: {
        initSlide() {
            clearInterval(this.slideInterval);

            this.slideInterval = setInterval(() => {
                this.changeSlide("right");
            }, this.slideDuration);
        },
        changeSlide(direction) {
            this.initSlide();

            if (direction === "left") {
                this.index = this.index > 0 ? --this.index : 2;
            } else {
                this.index = this.index < 2 ? ++this.index : 0;
            }
        },
    },
};
</script>

<style></style>
