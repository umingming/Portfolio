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
            <div class="txt" v-html="intro.txt"></div>
        </div>
    </div>
</template>

<script>
import { INTRO } from "@/constants/main.js";
export default {
    computed: {
        introList() {
            return INTRO;
        },
    },
};
</script>

<style></style>
