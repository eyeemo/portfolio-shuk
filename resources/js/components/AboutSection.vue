<!-- AboutSection.vue — about text + stat cards.
    The 3 stat cards are driven by a small `stats` array. -->
<template>
    <section id="about">
        <div class="about-layout">
            <div v-fade-in>
                <div class="section-eyebrow">About Me</div>
                <h2 class="section-title">Hi, I'm<br />Shukri Aman</h2>
                <p class="section-desc">
                    A Backend PHP Developer with nearly 2 years of experience
                    building and maintaining web applications with Laravel,
                    particularly for government sector systems. Proficient in
                    MVC architecture, RESTful API development, and MySQL
                    optimization — a proactive, detail-oriented problem solver.
                </p>

                <div class="stats-row">
                    <div
                        class="stat-card"
                        v-for="stat in stats"
                        :key="stat.label"
                    >
                        <div class="stat-num">{{ stat.num }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                    </div>
                </div>

                <div class="about-contact">
                    <a href="mailto:muhammadshukri2332@gmail.com">
                        <div class="contact-icon"><Mail :size="16" /></div>
                        muhammadshukri2332@gmail.com
                    </a>
                    <a
                        href="https://github.com/eyeemo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="contact-icon">
                            <BrandIcon :path="siGithub.path" :size="16" />
                        </div>
                        github.com/shukri-aman
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shukri-aman-51b8b3255"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="contact-icon">
                            <BrandIcon :path="linkedinPath" :size="16" />
                        </div>
                        linkedin.com/in/ShukriAman
                    </a>
                </div>
                <br />
                <a
                    href="#services"
                    class="btn-primary"
                    style="display: inline-flex; align-items: center; gap: 8px"
                    >My Expertise <ArrowRight :size="16"
                /></a>
            </div>

            <div class="about-visual" v-fade-in>
                <div class="about-main-img">
                    <img
                        src="/images/profile.png"
                        alt="Shukri Aman"
                        style="width: 100%; height: 100%; object-fit: cover"
                    />
                </div>
                <div class="about-accent-box">
                    <div class="big-num">2+</div>
                    <p>Years turning coffee into code</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Mail, ArrowRight } from "lucide-vue-next";
import { siGithub } from "simple-icons";
import BrandIcon from "./BrandIcon.vue";
import { linkedinPath } from "../icons.js";

const stats = [
    { num: "23", label: "Age" },
    { num: "99%", label: "Coffee Dependency" },
    { num: "1", label: "Keyboard Warrior" },
];
</script>
