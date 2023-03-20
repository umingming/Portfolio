<template>
    <div class="main-slide">
        <img :src="slide.img" />
        <div class="txt">
            <p class="en">{{ slide.p }}</p>
            <h2 v-html="slide.h2"></h2>
        </div>
    </div>
</template>

<script>
import { SLIDE } from "@/constants/main.js";
export default {
    props: {
        index: { type: Number },
    },
    computed: {
        slide() {
            return SLIDE[this.index];
        },
    },
};
</script>

<style scoped></style>
