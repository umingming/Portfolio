<template>
    <div class="base-slide" :class="{ bright: isBackgroundBright }">
        <div class="image">
            <img :src="slide.img" />
            <button v-if="hasScroll">
                <i class="fa-solid fa-arrow-down" @click="scrollDown"></i>
            </button>
        </div>
        <div class="txt">
            <p class="en">{{ slide.en }}</p>
            <h2 v-html="slide.title"></h2>
        </div>
    </div>
</template>

<script>
import { SLIDES } from "@/constants/main.js";
import viewportMixin from "@/mixins/viewportMixin";

export default {
    props: {
        index: { type: Number, default: 0 },
    },
    mixins: [viewportMixin],
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
            const target = this.$el.offsetHeight * 1.2;

            const scrollDown = () => {
                const diff = target - this.viewportTop;
                const speed = 5;
                const step = Math.max(diff / speed, 1);
                window.scrollTo(0, this.viewportTop + step);

                if (this.viewportTop < target) {
                    requestAnimationFrame(scrollDown);
                }
            };
            requestAnimationFrame(scrollDown);
        },
    },
};
</script>

<style></style>
