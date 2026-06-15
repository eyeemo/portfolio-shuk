<!-- FaqSection.vue — the accordion.
     Reactive state (openIndex) controls which answer is open. -->
<template>
    <section id="faq">
        <div class="faq-layout" v-fade-in>
            <div>
                <div class="section-eyebrow">FAQ</div>
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-desc" style="margin-top: 16px">
                    Can't find your answer? Feel free to reach out directly —
                    I'm happy to help.
                </p>
            </div>

            <div class="faq-list">
                <!-- (faq, index) gives us the position so we know which one is open -->
                <div
                    class="faq-item"
                    v-for="(faq, index) in faqs"
                    :key="faq.q"
                    :class="{ open: openIndex === index }"
                >
                    <!-- @click is shorthand for v-on:click -->
                    <button class="faq-q" @click="toggle(index)">
                        {{ faq.q }}
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-a">{{ faq.a }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(0);

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index;
}

const faqs = [
    {
        q: "What is your main tech stack?",
        a: "I primarily work with PHP and the Laravel framework, backed by MySQL and PostgreSQL. I also have experience with .NET/C#, plus HTML, CSS and JavaScript on the frontend, and Git/GitHub for version control.",
    },
    {
        q: "What kind of projects do you build?",
        a: "Mostly backend-heavy web applications — government sector systems, RESTful APIs, batch processing for large datasets, and reporting integrations. I focus on scalable, maintainable systems.",
    },
    {
        q: "How do you approach performance?",
        a: "I optimize MySQL queries through indexing and caching, resolve N+1 problems, and profile existing systems for bottlenecks. Performance enhancement of live applications is a core part of my day-to-day work.",
    },
    {
        q: "How do you ensure code quality and reliability?",
        a: "I follow software development best practices, use Git for version control and collaboration, and test APIs thoroughly with Postman to confirm functionality and reliability before release.",
    },
    {
        q: "Can you work with reporting tools?",
        a: "Yes. I have built backend integrations with JasperReports, passing dynamic variables and parameters to generate automated reports directly from application data.",
    },
    {
        q: "Are you open to new opportunities?",
        a: "I'm always open to interesting backend projects and collaborations. The fastest way to reach me is through the contact form below or via email — I'll get back to you as soon as I can.",
    },
];
</script>
