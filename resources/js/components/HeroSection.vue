<!-- HeroSection.vue — the big intro area.
     Mostly static HTML. Notice v-fade-in: our custom directive
     that animates the block into view on scroll. -->
<template>
    <section class="hero">
        <div class="hero-content" v-fade-in>
            <div class="hero-badge">
                <span class="dot"></span>
                Available for work
            </div>
            <h1>Software<br /><em>Developer</em></h1>
            <p class="hero-sub">
                A Backend Developer passionate about building scalable systems,
                crafting clean code, and delivering efficient solutions to
                real-world problems.
            </p>
            <div class="hero-actions">
                <a href="#about" class="btn-primary">View Me <ArrowRight :size="16" /></a>
                <a href="#contact" class="btn-outline">Get in Touch</a>
            </div>
        </div>

        <!-- <div class="hero-visual">
            <div class="hero-img-back">
                <div class="img-placeholder">[ Your Photo ]</div>
            </div> -->
            <!-- <div class="hero-img-front">
                <div class="hero-card">
                    <div class="hero-card-label">Portfolio Creator</div>
                    <div class="hero-card-name">Your Name</div>
                    <div class="hero-card-role">
                        Digital Designer &amp; Developer
                    </div>
                </div>
            </div> -->
        <!-- </div> -->
    </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
</script>
