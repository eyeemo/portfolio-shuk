<!-- AboutSection.vue — about text + stat cards.
    The 3 stat cards are driven by a small `stats` array. -->
<template>
    <section id="about">
        <div class="about-layout">
            <!-- intro: eyebrow + title + paragraph -->
            <div class="about-intro" v-fade-in>
                <!-- <div class="section-eyebrow">About Me</div> -->
                <h2 class="section-title" ref="titleEl">
                    Hi, I'm<br /><span>{{ typedName }}</span
                    ><span class="type-cursor"></span>
                </h2>
                <p class="section-desc">
                    Backend PHP Developer with nearly 2 years of experience
                    building and maintaining web applications with Laravel,
                    particularly for government sector systems. Proficient in
                    MVC architecture, RESTful API development, and MySQL
                    optimization — a proactive, detail-oriented problem solver.
                </p>
            </div>

            <!-- photo: on desktop sits on the right; on mobile it slots in
                right after the intro paragraph (grid-template-areas). -->
            <div class="about-visual" v-fade-in>
                <div class="about-main-img">
                    <img
                        :src="profileImg"
                        alt="Shukri Aman"
                        style="width: 100%; height: 100%; object-fit: cover"
                    />
                </div>
                <!-- <div class="about-accent-box">
                    <div class="big-num">2+</div>
                    <p>Years turning coffee into code</p>
                </div> -->
            </div>

            <!-- rest: stats + contact links + button -->
            <div class="about-rest" v-fade-in>
                <div class="stats-row" ref="statsRow">
                    <div
                        class="stat-card"
                        v-for="(stat, i) in stats"
                        :key="stat.label"
                    >
                        <div class="stat-num">{{ display[i] }}</div>
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
                <!-- <a
                    href="#contact"
                    class="btn-primary"
                    style="display: inline-flex; align-items: center; gap: 8px"
                    >Get in Touch <ArrowRight :size="16"
                /></a> -->
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Mail, ArrowRight } from "lucide-vue-next";
import { siGithub } from "simple-icons";
import BrandIcon from "./BrandIcon.vue";
import { linkedinPath } from "../icons.js";
// Import the image as a module so Vite hashes it and resolves the correct
// URL in every build (Laravel /build/… and the static GitHub Pages build).
import profileImg from "../../images/profile.png";

const stats = [
    { num: "23", label: "Age" },
    { num: "99%", label: "Coffee Dependency" },
    { num: "1", label: "Keyboard Warrior" },
];

// Split each value into prefix + number + suffix so "99%" counts to 99 and
// keeps the "%". Falls back gracefully for purely non-numeric values.
const parsed = stats.map((s) => {
    const m = String(s.num).match(/^(\D*?)(\d+(?:\.\d+)?)(\D*)$/);
    if (!m) return { prefix: "", target: 0, decimals: 0, suffix: String(s.num) };
    return {
        prefix: m[1],
        target: parseFloat(m[2]),
        decimals: (m[2].split(".")[1] || "").length,
        suffix: m[3],
    };
});

// What the template renders; starts at 0 and is animated up to each target.
const display = ref(parsed.map((p) => p.prefix + "0" + p.suffix));

const statsRow = ref(null);

// Typewriter for the name
const NAME = "Shukri Aman";
const typedName = ref("");
const titleEl = ref(null);

function runTypewriter() {
    let i = 0;
    (function step() {
        typedName.value = NAME.slice(0, i);
        if (i++ < NAME.length) setTimeout(step, 95);
    })();
}

function runCountUp() {
    const duration = 2600; // count-up length in ms — higher = slower
    const start = performance.now();
    function frame(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        display.value = parsed.map(
            (p) => p.prefix + (p.target * eased).toFixed(p.decimals) + p.suffix,
        );
        if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

onMounted(() => {
    // Type the name out the first time the heading scrolls into view.
    const titleObs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    runTypewriter();
                    titleObs.disconnect();
                }
            });
        },
        { threshold: 0.6 },
    );
    if (titleEl.value) titleObs.observe(titleEl.value);

    // Count up once, the first time the stats scroll into view.
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    runCountUp();
                    obs.disconnect();
                }
            });
        },
        { threshold: 0.4 },
    );
    if (statsRow.value) obs.observe(statsRow.value);
});
</script>
