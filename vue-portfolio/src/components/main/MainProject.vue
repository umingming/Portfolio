<template>
    <div class="main-project">
        <div class="title">
            <h2>MY PROJECTS</h2>
        </div>
        <div v-for="project of PROJECTS" :key="project.name" class="project">
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
        };
    },
};
</script>
<style></style>
