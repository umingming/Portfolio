<template>
    <header :class="{ on: isContactView() }">
        <div class="innerHeader">
            <h1 class="logo">
                <router-link to="/main">
                    <img src="../../public/img/logo1.png" />
                    <img src="../../public/img/logo2.png" />
                </router-link>
            </h1>
            <ul class="menu en">
                <li
                    v-for="menu of menus"
                    :key="menu"
                    :class="{ active: isMenuActive(menu) }"
                >
                    <router-link :to="getPathByMenuName(menu)">
                        {{ menu }}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menus: ["about", "skill", "project", "contact"],
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
        isScrolledDown() {
            return window.pageYOffset > 200;
        },
        isContactView() {
            return this.$route.name === "ContactView";
        },
        isMenuActive(menu) {
            return this.$route.path === this.getPathByMenuName(menu);
        },
        getPathByMenuName(name) {
            return `/${name}`;
        },
    },
};
</script>

<style></style>
