<template>
    <div class="main-contact">
        <div class="title">
            <h2>CONTACT ME</h2>
        </div>
        <div class="content" :class="{ 'slide-up': inViewport }">
            <div id="mail">
                <i class="lnr lnr-envelope"></i>
                <a href="mailto:u_0112@naver.com">u_0112@naver.com</a>
            </div>
            <div id="phone">
                <i class="lnr lnr-phone-handset"></i>
                <a href="tel:010-5514-4506">010-5514-4506</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inViewport: false,
        };
    },
};
</script>
<style></style>
