<template>
    <section class="about">
        <base-slide :index="0"></base-slide>
    </section>
</template>

<script>
import BaseSlide from "@/components/base/BaseSlide.vue";
export default {
    name: "AboutView",
    components: {
        BaseSlide,
    },
    data() {
        return {};
    },
};
</script>

<style></style>
