import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["viewportTop", "inViewport"]),
        $inViewport() {
            const { offsetTop = 0, offsetHeight = 0 } = this.$el || {};
            const offsetBottom = offsetTop + offsetHeight;
            return this.inViewport(offsetTop, offsetBottom);
        },
    },
};
