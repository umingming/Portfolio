<template>
    <header :class="{ on: isContactView }">
        <div class="innerHeader">
            <h1 class="logo">
                <router-link to="/main">
                    <img src="../../public/img/logo1.png" />
                    <img src="../../public/img/logo2.png" />
                </router-link>
            </h1>
            <ul class="menu en">
                <li
                    v-for="menu of MENUS"
                    :key="menu"
                    :class="{ active: isMenuActive(menu) }"
                >
                    <router-link
                        :to="getPathByMenuName(menu)"
                        :data-test="menu"
                    >
                        {{ menu }}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MENUS } from "../constants/main";

export default defineComponent({
    data() {
        return {
            MENUS,
        };
    },
    mounted() {
        this.initHeader();
    },
    methods: {
        initHeader() {
            window.addEventListener("scroll", () => {
                const $header = document.getElementsByTagName("header")[0];
                if (this.isScrolledDown()) {
                    $header.classList.add("on");
                } else if (!this.isContactView()) {
                    $header.classList.remove("on");
                }
            });
        },
        isScrolledDown(): boolean {
            // const $slide = document.querySelector(".base-slide");
            return false;
        },
        isContactView(): boolean {
            return this.$route.name === "ContactView";
        },
        isMenuActive(menu: string): boolean {
            return this.$route.path === this.getPathByMenuName(menu);
        },
        getPathByMenuName(name: string = ""): string {
            return `/${name}`;
        },
    },
});
</script>
