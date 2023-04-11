<template>
    <div class="main-project">
        <div class="title" :class="{ 'slide-right': inViewport }">
            <h2>MY PROJECTS</h2>
        </div>
        <div
            v-for="(project, index) of PROJECTS"
            :key="index"
            class="project"
            :class="applySlideEffect(index)"
        >
            <div class="img">
                <img :src="project.img" />
            </div>
            <div :id="project.id">
                <p class="txt">{{ project.txt }}</p>
                <p class="name">{{ project.name }}</p>
                <base-button v-bind="project"></base-button>
            </div>
        </div>
    </div>
</template>

<script>
import { PROJECTS } from "@/constants/main.js";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
    components: { BaseButton },
    data() {
        return {
            PROJECTS,
            inViewport: false,
        };
    },
    computed: {
        applySlideEffect() {
            const effects = ["up", "down", "left", "right"];
            return (index) => {
                const effect = `slide-${effects[index % effects.length]}`;
                return this.inViewport ? effect : "";
            };
        },
    },
};
</script>
<style></style>
