<template>
    <section class="main">
        <button class="arrow" @click="changeSlide('left')">
            <i class="bi bi-chevron-right"></i>
        </button>
        <button class="arrow" @click="changeSlide('right')">
            <i class="bi bi-chevron-left"></i>
        </button>
        <ul class="slide">
            <li v-if="isSlideIndex(1)">
                <img src="../../public/img/main0_scroll.jpg" alt="메인1" />
                <p id="btnScroll">
                    <img src="../../public/img/scroll.png" alt="메인1" />
                </p>
                <div class="txt">
                    <p class="en">Developer</p>
                    <h2>
                        안녕하세요,<br />
                        <span>이유미</span>입니다!
                    </h2>
                </div>
            </li>
            <li v-if="isSlideIndex(2)" id="light-background">
                <img src="../../public/img/main2.jpg" alt="메인2" />
                <div class="txt">
                    <p class="en">untiring effort</p>
                    <h2><span>꾸준함</span>으로 탁월함을<br />앞서겠습니다.</h2>
                </div>
            </li>
            <li v-if="isSlideIndex(3)">
                <img src="../../public/img/main3.jpg" alt="메인3" />
                <div class="txt">
                    <p class="en">With a reason</p>
                    <h2>
                        <span>이유</span>가 있는
                        <span>코드</span>를<br />작성하겠습니다.
                    </h2>
                </div>
            </li>
        </ul>
        <div class="slide-bar"></div>
        <a class="hits" href="#!"
            ><img
                src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fumingming.github.io%2FPortfolio%2F&count_bg=%23FF5492&title_bg=%23FF5492&icon=&icon_color=%23E7E7E7&title=%E2%9D%A4&edge_flat=false"
        /></a>
    </section>
</template>

<script>
export default {
    data() {
        return {
            slideIndex: 1,
            slideChangedTime: null,
            slideDuration: 7000,
            slideInterval: null,
        };
    },
    computed: {
        isSlideIndex() {
            return (index) => {
                return this.slideIndex === index;
            };
        },
    },
    created() {
        this.initSlide();
    },
    methods: {
        initSlide() {
            clearInterval(this.slideInterval);

            this.slideInterval = setInterval(() => {
                this.changeSlide("right");
            }, this.slideDuration);
        },
        changeSlide(direction) {
            if (direction === "left") {
                this.slideIndex = this.slideIndex > 1 ? --this.slideIndex : 3;
            } else {
                this.slideIndex = this.slideIndex < 3 ? ++this.slideIndex : 1;
            }
        },
    },
};
</script>

<style></style>
