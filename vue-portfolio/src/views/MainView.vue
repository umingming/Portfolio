<template>
    <section class="main">
        <div class="slide">
            <main-slide></main-slide>
            <main-hits></main-hits>
        </div>
        <div class="intro">
            <main-intro></main-intro>
        </div>
    </section>
</template>

<script>
import MainSlide from "@/components/main/MainSlide.vue";
import MainHits from "@/components/main/MainHits.vue";
import MainIntro from "@/components/main/MainIntro.vue";
export default {
    name: "MainView",
    components: { MainSlide, MainHits, MainIntro },
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
