import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["inViewport"]),
        $inViewport() {
            return this.inViewport(this.$el ?? {});
        },
    },
};
