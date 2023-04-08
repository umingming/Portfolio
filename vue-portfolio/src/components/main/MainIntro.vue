<template>
    <div class="main-intro">
        <div class="title">
            <h2>ABOUT ME</h2>
        </div>
        <div
            v-for="(intro, index) of introList"
            :key="index"
            :class="`intro${index}`"
        >
            <div class="img">
                <img :src="intro.img" />
            </div>
            <div class="txt">
                <div v-html="intro.txt"></div>
                <button @mouseover="hoveredIndex = index">
                    <label>{{ intro.btn.label }}</label>
                </button>
                <i class="bi bi-cursor-fill"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { INTRO } from "@/constants/main.js";
export default {
    data() {
        return {
            hoveredIndex: -1,
        };
    },
    computed: {
        introList() {
            return INTRO;
        },
    },
    methods: {},
};
</script>

<style></style>
