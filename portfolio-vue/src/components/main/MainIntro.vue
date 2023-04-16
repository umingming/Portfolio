<template>
    <div class="main-intro">
        <div class="title" :class="{ 'slide-down': $inViewport }">
            <h2>ABOUT ME</h2>
        </div>
        <div v-for="intro of INTROS" :key="intro.id" :id="intro.id">
            <div class="img" :class="{ 'slide-left': $inViewport }">
                <img :src="intro.img" />
            </div>
            <div class="txt" :class="{ 'slide-right': $inViewport }">
                <div v-html="intro.txt"></div>
                <base-button v-bind="intro"></base-button>
            </div>
        </div>
    </div>
</template>

<script>
import { SLIDES, INTROS } from "@/constants/main.js";
import BaseButton from "@/components/base/BaseButton.vue";
import viewportMixin from "@/mixins/viewportMixin.js";

export default {
    components: { BaseButton },
    mixins: [viewportMixin],
    data() {
        return {
            INTROS,
            SLIDES,
        };
    },
};
</script>

<style></style>
