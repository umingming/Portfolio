<template>
    <div class="main-slide" :class="{ light: slideIndex === 1 }">
        <div class="image" :key="slideIndex">
            <img :src="slide.img" />
            <button v-if="slideIndex === 0">
                <i class="bi bi-arrow-down"></i>
            </button>
            <div class="txt">
                <p class="en">{{ slide.p }}</p>
                <h2 v-html="slide.h2"></h2>
            </div>
        </div>
        <button class="arrow" @click="changeSlide('right')">
            <i class="bi bi-chevron-right"></i>
        </button>
        <button class="arrow" @click="changeSlide('left')">
            <i class="bi bi-chevron-left"></i>
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
                this.slideIndex = this.slideIndex > 0 ? --this.slideIndex : 2;
            } else {
                this.slideIndex = this.slideIndex < 2 ? ++this.slideIndex : 0;
            }
        },
    },
};
</script>

<style scoped></style>
