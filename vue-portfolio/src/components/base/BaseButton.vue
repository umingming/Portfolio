<template>
    <div class="base-button">
        <button
            @mouseover="moveCursor(id, true)"
            @mouseout="moveCursor(id, false)"
            @click="openSite(site.url)"
        >
            <label>{{ label }}</label>
        </button>
        <i class="bi bi-cursor-fill cursor"></i>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String },
        site: { type: Object },
    },
    computed: {
        label() {
            return this.site.name || "More";
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
