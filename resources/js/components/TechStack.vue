<!-- TechStack.vue — a fun row of tech badges.
     Brand logos come from `simple-icons` (real PHP/Laravel/MySQL marks).
     Each item stores either `brand` (a simple-icons object with an SVG
     path) or `lucide` (a Lucide component) for non-brand concepts. -->
<template>
    <section class="tech-stack">
        <div class="tech-stack-header" v-fade-in>
            <Wrench class="tech-stack-emoji" :size="22" />
            <h3>Tech stack</h3>
            <span class="tech-stack-note">— the stuff I reach for daily</span>
        </div>

        <div class="tech-badges" v-fade-in>
            <div class="tech-badge" v-for="t in stack" :key="t.name">
                <!-- only the logo keeps the brand colour; the chip stays neutral -->
                <span class="tech-icon" :style="{ color: t.color }">
                    <!-- brand logo: draw the simple-icons SVG path -->
                    <svg
                        v-if="t.brand"
                        role="img"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="currentColor"
                    >
                        <path :d="t.brand.path" />
                    </svg>
                    <!-- otherwise fall back to a Lucide icon component -->
                    <component v-else :is="t.lucide" :size="16" />
                </span>
                {{ t.name }}
            </div>
        </div>
    </section>
</template>

<script setup>
import { Wrench, Webhook } from "lucide-vue-next";
import {
    siPhp,
    siLaravel,
    siMysql,
    siPostgresql,
    siPostman,
    siGit,
    siJavascript,
    siDotnet,
    siVuedotjs,
    siVite,
} from "simple-icons";

const stack = [
    // backend — my main strength
    { name: "PHP", brand: siPhp, color: "#777BB4" },
    { name: "Laravel", brand: siLaravel, color: "#FF2D20" },
    { name: "MySQL", brand: siMysql, color: "#4479A1" },
    { name: "PostgreSQL", brand: siPostgresql, color: "#4169E1" },
    { name: "REST API", lucide: Webhook, color: "#10B981" },
    // { name: ".NET", brand: siDotnet, color: "#512BD4" },
    // tooling
    { name: "Git", brand: siGit, color: "#F03C2E" },
    { name: "Postman", brand: siPostman, color: "#FF6C37" },
    // frontend — used to build this very site
    { name: "JavaScript", brand: siJavascript, color: "#C9A000" },
    // { name: "Vue.js", brand: siVuedotjs, color: "#42B883" },
    // { name: "Vite", brand: siVite, color: "#8B5CF6" },
];
</script>
