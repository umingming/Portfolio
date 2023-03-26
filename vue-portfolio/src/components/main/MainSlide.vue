<template>
    <div class="main-slide" :class="{ bright: isBackgroundBright }">
        <div class="image" :key="slideIndex">
            <img :src="slide.img" />
            <button v-if="hasScroll">
                <i class="fa-solid fa-arrow-down" @click="scrollDown"></i>
            </button>
            <div class="txt">
                <p class="en">{{ slide.p }}</p>
                <h2 v-html="slide.h2"></h2>
            </div>
        </div>
        <button class="arrow" @click="changeSlide('right')">
            <i class="fa-solid fa-angle-right"></i>
        </button>
        <button class="arrow" @click="changeSlide('left')">
            <i class="fa-solid fa-angle-left"></i>
        </button>
    </div>
</template>

<script>
import { SLIDE } from "@/constants/main.js";
export default {
    data() {
        return {
            slideIndex: 0,
            slideDuration: 10000,
            slideInterval: null,
        };
    },
    computed: {
        slide() {
            return SLIDE[this.slideIndex];
        },
        isBackgroundBright() {
            return this.slideIndex === 1;
        },
        hasScroll() {
            return this.slideIndex === 0;
        },
    },
    created() {
        // this.initSlide();
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
                this.slideIndex = this.slideIndex > 0 ? --this.slideIndex : 2;
            } else {
                this.slideIndex = this.slideIndex < 2 ? ++this.slideIndex : 0;
            }
        },
        scrollDown() {
            console.log("scrollDown");
        },
    },
};
</script>

<style scoped></style>
