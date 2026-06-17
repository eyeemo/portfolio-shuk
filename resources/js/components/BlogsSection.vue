<!-- BlogsSection.vue — Experience & Education shown as a clean vertical
     timeline. Each entry: date + type tag, role/qualification, and a short
     description. Driven by the `timeline` array. -->
<template>
    <section id="blogs">
        <div class="blogs-header" v-fade-in>
            <div>
                <div class="section-eyebrow">Career</div>
                <h2 class="section-title">Experience &amp; Education</h2>
            </div>
        </div>

        <div class="timeline">
            <div
                class="timeline-item"
                v-for="(item, i) in timeline"
                :key="item.title"
                v-fade-in
                :style="{ transitionDelay: i * 0.15 + 's' }"
            >
                <span
                    class="timeline-marker"
                    :class="{ current: item.current }"
                ></span>
                <div class="timeline-top">
                    <span class="timeline-date">{{ item.date }}</span>
                    <span class="timeline-tag">{{ item.tag }}</span>
                    <span v-if="item.current" class="timeline-live">
                        <span class="live-dot"></span>Present
                    </span>
                </div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-desc">{{ item.excerpt }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const timeline = [
    {
        tag: "Work",
        date: "Aug 2024",
        current: true,
        title: "Junior PHP Developer · Unijaya Resources",
        excerpt:
            "Developing and maintaining Laravel web apps for government systems — RESTful APIs, MySQL optimization, JasperReports integration and Git collaboration.",
    },
    {
        tag: "Internship",
        date: "Aug 2023 – Jan 2024",
        title: "IT Support · Interlink Impact Holding",
        excerpt:
            "Provided IT support, managed company projects including clinic openings (40% process improvement), and assisted with quotations and invoicing.",
    },
    {
        tag: "Education",
        date: "Aug 2021 – Jan 2024",
        title: "Diploma in Information Technology · UTHM",
        excerpt:
            "Universiti Tun Hussein Onn Malaysia. Final CGPA 3.42, with Dean's List awards in 2021 and 2022.",
    },
];
</script>
