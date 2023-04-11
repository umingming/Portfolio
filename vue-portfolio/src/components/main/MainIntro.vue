<template>
    <div class="main-intro">
        <div class="title">
            <h2>ABOUT ME</h2>
        </div>
        <div v-for="intro of INTROS" :key="intro.id" :id="intro.id">
            <div class="img">
                <img :src="intro.img" />
            </div>
            <div class="txt">
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
        };
    },
    computed: {
        txt() {
            return (id) => {
                const index = +id.at(-1) + 1;
                return this.SLIDES[index];
            };
        },
        content() {
            return (id) => {
                const content = this.txt(id).title;
                return content.replace("<br />", " ");
            };
        },
    },
    methods: {
        moveCursor(id, isOver) {
            const cursor = document.querySelector(`#${id} .cursor`);
            cursor.classList.toggle("on", isOver);
        },
        openSite(url) {
            const feature = {
                width: 1200,
                height: 800,
                left: window.screen.width / 2 - 600,
                top: window.screen.height / 2 - 400,
            };
            const featureString = Object.entries(feature)
                .map(([key, value]) => `${key}=${value}`)
                .join(", ");

            window.open(url, "_blank", featureString);
        },
    },
};
</script>

<style></style>
