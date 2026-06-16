<!-- ContactSection.vue — simple, static contact block.
     No backend form (the site is hosted statically) — just a prominent
     email link, location, and social buttons, centred for a clean look. -->
<template>
    <section id="contact">
        <div class="contact-clean" v-fade-in>
            <div class="section-eyebrow">Contact</div>
            <h2 class="section-title">Let's work together</h2>
            <p class="section-desc contact-intro">
                Looking for my next opportunity. If you think we'd be a good
                fit, don't hesitate to reach out!
            </p>

            <!-- the headline action: a big, tappable email -->
            <!-- <a class="contact-email" href="mailto:muhammadshukri2332@gmail.com">
                muhammadshukri2332@gmail.com
            </a> -->

            <p class="contact-meta">Based in Malaysia</p>

            <div class="social-links contact-socials">
                <a
                    href="https://github.com/eyeemo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-btn"
                    title="GitHub"
                    ><BrandIcon :path="siGithub.path" :size="18"
                /></a>
                <a
                    href="https://www.linkedin.com/in/shukri-aman-51b8b3255"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-btn"
                    title="LinkedIn"
                    ><BrandIcon :path="linkedinPath" :size="18"
                /></a>
                <a
                    href="mailto:muhammadshukri2332@gmail.com"
                    class="social-btn"
                    title="Email"
                    ><Mail :size="18"
                /></a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Mail } from "lucide-vue-next";
import { siGithub } from "simple-icons";
import BrandIcon from "./BrandIcon.vue";
import { linkedinPath } from "../icons.js";
</script>
