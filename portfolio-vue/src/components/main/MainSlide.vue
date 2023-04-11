<template>
    <div class="main-slide">
        <base-slide :key="slideIndex" :index="slideIndex"></base-slide>
        <button class="arrow" @click="changeSlide('right')">
            <i class="fa-solid fa-angle-right"></i>
        </button>
        <button class="arrow" @click="changeSlide('left')">
            <i class="fa-solid fa-angle-left"></i>
        </button>
    </div>
</template>

<script>
import BaseSlide from "@/components/base/BaseSlide.vue";

export default {
    components: {
        BaseSlide,
    },
    data() {
        return {
            slideIndex: 0,
            slideDuration: 10000,
            slideInterval: null,
        };
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
