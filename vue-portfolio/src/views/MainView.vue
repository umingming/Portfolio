<template>
    <section class="main">
        <div class="slide">
            <main-slide></main-slide>
            <main-hits></main-hits>
        </div>
        <div class="intro">
            <main-introduction></main-introduction>
        </div>
    </section>
</template>

<script>
import MainSlide from "@/components/main/MainSlide.vue";
import MainHits from "@/components/main/MainHits.vue";
import MainIntroduction from "@/components/main/MainIntroduction.vue";
export default {
    components: { MainSlide, MainHits, MainIntroduction },
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
