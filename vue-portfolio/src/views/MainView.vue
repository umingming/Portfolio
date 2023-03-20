<template>
    <section class="main">
        <div class="slide">
            <main-slide
                :class="{ 'light-background': slideIndex === 1 }"
                :key="slideIndex"
                :index="slideIndex"
            ></main-slide>
            <button class="arrow" @click="changeSlide('right')">
                <i class="bi bi-chevron-right"></i>
            </button>
            <button class="arrow" @click="changeSlide('left')">
                <i class="bi bi-chevron-left"></i>
            </button>
            <a class="hits" href="#!"
                ><img
                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fumingming.github.io%2FPortfolio%2F&count_bg=%23FF5492&title_bg=%23FF5492&icon=&icon_color=%23E7E7E7&title=%E2%9D%A4&edge_flat=false"
            /></a>
        </div>
    </section>
</template>

<script>
import MainSlide from "@/components/main/MainSlide.vue";
export default {
    components: { MainSlide },
    data() {
        return {
            slideIndexes: [0, 1, 2],
            index: 0,
            slideChangedTime: null,
            slideDuration: 10000,
            slideInterval: null,
        };
    },
    computed: {
        isSlideIndex() {
            return (index) => {
                return this.index === index;
            };
        },
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
