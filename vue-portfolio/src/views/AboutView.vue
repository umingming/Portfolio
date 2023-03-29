<template>
    <section class="about">
        <div class="slide">
            <base-slide :index="0"></base-slide>
        </div>
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
