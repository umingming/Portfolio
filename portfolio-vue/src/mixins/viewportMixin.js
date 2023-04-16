import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["viewportTop", "inViewport"]),
        $inViewport() {
            return this.inViewport(this.$el ?? {});
        },
    },
};
