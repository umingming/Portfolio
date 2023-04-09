<template>
    <div class="about-intro">
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
import { INTROS } from "@/constants/main.js";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
    components: { BaseButton },
    data() {
        return {
            INTROS,
        };
    },
};
</script>

<style></style>
