<!-- ============================================================
    App.vue — the ROOT component.

    A .vue file ("Single File Component") has up to 3 blocks:
    <template> = the HTML
    <script>   = the JavaScript logic
    <style>    = CSS (we keep our CSS global in app.css instead)

    This root component does almost nothing except place each
    section component in order — just like the sections in the
    original index.html. This is the power of components:
    the big page becomes small, readable pieces.
    ============================================================ -->
<template>
    <NavBar />

    <!-- <HeroSection />
    <hr class="divider" /> -->

    <AboutSection />
    <hr class="divider" />

    <!-- <ProjectsSection />
    <hr class="divider" /> -->

    <!-- <TestimonialsSection />
    <hr class="divider" /> -->

    <ServicesSection />
    <hr class="divider" />

    <!-- <FaqSection />
    <hr class="divider" /> -->

    <BlogsSection />
    <hr class="divider" />

    <TechStack />
    <hr class="divider" />

    <ContactSection />

    <SiteFooter />
</template>

<script setup>
// "import" each child component, then use it as a tag in the template above.
// With <script setup>, simply importing a component makes it available.
import NavBar from "./NavBar.vue";
import HeroSection from "./HeroSection.vue";
import ServicesSection from "./ServicesSection.vue";
import TechStack from "./TechStack.vue";
import AboutSection from "./AboutSection.vue";
import ProjectsSection from "./ProjectsSection.vue";
import TestimonialsSection from "./TestimonialsSection.vue";
import FaqSection from "./FaqSection.vue";
import BlogsSection from "./BlogsSection.vue";
import ContactSection from "./ContactSection.vue";
import SiteFooter from "./SiteFooter.vue";
</script>
