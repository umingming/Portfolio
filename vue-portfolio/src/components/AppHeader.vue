<template>
    <header>
        <div class="innerHeader">
            <h1 class="logo">
                <a href="#!">
                    <img src="../../public/img/logo1.png" alt="로고1" />
                    <img src="../../public/img/logo2.png" alt="로고2" />
                </a>
            </h1>
            <ul class="menu en">
                <li id="btnAbout">
                    <router-link to="/main">ABOUT</router-link>
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
export default {};
</script>

<style></style>
