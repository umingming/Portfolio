<template>
    <section class="skill">
        <base-slide :index="1"></base-slide>
        <main-skill></main-skill>
    </section>
</template>

<script>
import BaseSlide from "@/components/base/BaseSlide.vue";
import MainSkill from "@/components/main/MainSkill.vue";
export default {
    name: "SkillView",
    components: {
        BaseSlide,
        MainSkill,
    },
    data() {
        return {};
    },
};
</script>

<style></style>
