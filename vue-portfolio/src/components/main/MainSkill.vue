<template>
    <div class="main-skill">
        <div class="title">
            <h2>MY SKILLS</h2>
        </div>
        <div v-for="skill of SKILLS" :key="skill.name" class="skill">
            <div class="logo">
                <img :src="skill.img" />
                <label>{{ skill.name }}</label>
            </div>
            <div class="score" :id="skill.name">
                <div class="bar"></div>
                <div class="circle">{{ skill.score }}%</div>
            </div>
            <div v-html="skill.txt"></div>
        </div>
    </div>
</template>

<script>
import { SKILLS } from "@/constants/main.js";
export default {
    data() {
        return {
            SKILLS,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            window.addEventListener("scroll", () => {
                if (this.isScrolledDown()) {
                    this.updateScore();
                }
            });
        },
        isScrolledDown() {
            const { offsetTop } = document.querySelector(".main-skill");
            return window.pageYOffset > offsetTop - 500;
        },
        updateScore() {
            const scoreList = document.querySelectorAll(".score");
            scoreList.forEach((i) => {
                const circle = i.querySelector(".circle");
                const bar = i.querySelector(".bar");
                const value = parseInt(circle.textContent);
                circle.style.left = `${value - 2}%`;
                bar.style.width = `${value}%`;
            });
        },
    },
};
</script>
<style></style>
