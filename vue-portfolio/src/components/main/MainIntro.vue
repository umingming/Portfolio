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
                <button
                    @mouseover="moveCursor(intro.id, true)"
                    @mouseout="moveCursor(intro.id, false)"
                    @click="openSite(intro.site.url)"
                >
                    <label>{{ intro.site.name }}</label>
                </button>
                <i class="bi bi-cursor-fill cursor"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { INTROS } from "@/constants/main.js";
export default {
    data() {
        return {
            INTROS,
        };
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
