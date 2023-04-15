import { mount, createLocalVue } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

test("renders active menu by route", async () => {
    //Given
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

    //When
    await wrapper.find("[data-test='contact']").trigger("click");

    //Then
    expect(wrapper.find(".active a").text()).toContain("contact");
});
