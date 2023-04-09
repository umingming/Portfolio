<template>
    <div class="base-slide" :class="{ bright: isBackgroundBright }">
        <div class="image">
            <img :src="slide.img" />
            <button v-if="hasScroll">
                <i class="fa-solid fa-arrow-down" @click="scrollDown"></i>
            </button>
        </div>
        <div class="txt">
            <p class="en">{{ slide.p }}</p>
            <h2 v-html="slide.h2"></h2>
        </div>
    </div>
</template>

<script>
import { SLIDES } from "@/constants/main.js";
export default {
    props: {
        index: { type: Number, default: 0 },
    },
    computed: {
        slide() {
            return SLIDES[this.index];
        },
        isBackgroundBright() {
            return this.index === 1;
        },
        hasScroll() {
            return this.index === 0;
        },
    },
    methods: {
        scrollDown() {
            console.log("scrollDown");
        },
    },
};
</script>

<style></style>
