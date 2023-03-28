<template>
    <header>
        <div class="innerHeader">
            <h1 class="logo">
                <router-link to="/main">
                    <img src="../../public/img/logo1.png" alt="로고1" />
                    <img src="../../public/img/logo2.png" alt="로고2" />
                </router-link>
            </h1>
            <ul class="menu en">
                <li id="btnAbout">
                    <router-link to="/about">ABOUT</router-link>
                </li>
                <li id="btnSkill">
                    <router-link to="/skill">SKILLS</router-link>
                </li>
                <li id="btnProject">
                    <router-link to="/project">PROJECT</router-link>
                </li>
                <li id="btnContact">
                    <router-link to="/contact">CONTACT</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    mounted() {
        this.initHeader();
    },
    methods: {
        initHeader() {
            window.addEventListener("scroll", () => {
                const $header = document.getElementsByTagName("header")[0];
                if (this.isScrolledDown()) {
                    $header.classList.add("on");
                } else {
                    $header.classList.remove("on");
                }
            });
        },
        isScrolledDown() {
            return window.pageYOffset > 200;
        },
    },
};
</script>

<style></style>
