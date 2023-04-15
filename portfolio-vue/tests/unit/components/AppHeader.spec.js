import { mount, createLocalVue } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

test("renders the correct route link", () => {
    const router = new VueRouter({
        routes: [
            {
                path: "/contact",
                name: "ContactView",
            },
        ],
    });
    const wrapper = mount(AppHeader, {
        localVue,
        router,
    });
    expect(wrapper.find('[data-test="title"]').text()).toBe("제목");
});
