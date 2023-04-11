<template>
    <div class="about-intro">
        <div class="title" :class="{ 'slide-down': isInView }">
            <h2>ABOUT ME</h2>
        </div>
        <div v-for="intro of INTROS" :key="intro.id" :id="intro.id">
            <div class="img" :class="{ 'slide-left': isInView }">
                <img :src="intro.img" />
            </div>
            <div class="txt" :class="{ 'slide-right': isInView }">
                <div v-html="intro.txt"></div>
                <base-button v-bind="intro"></base-button>
            </div>
        </div>
    </div>
</template>

<script>
import { SLIDES, INTROS } from "@/constants/main.js";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
    components: { BaseButton },
    data() {
        return {
            INTROS,
            SLIDES,
            isInView: false,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            window.addEventListener("scroll", () => {
                this.isInView = this.isScrolledIntoView();
            });
        },
        isScrolledIntoView() {
            const { offsetTop } = document.querySelector(".about-intro") ?? {};
            return window.pageYOffset > offsetTop - 900;
        },
    },
};
</script>

<style></style>
