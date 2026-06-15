<!-- BlogsSection.vue — repurposed into Experience & Education.
     Three cards driven by an array. Each item carries an optional
     `thumbClass` or `thumbStyle` for its banner. -->
<template>
    <section id="blogs">
        <div class="blogs-header" v-fade-in>
            <div>
                <div class="section-eyebrow">Career</div>
                <h2 class="section-title">Experience &amp; Education</h2>
            </div>
        </div>

        <div class="blogs-grid" v-fade-in>
            <div class="blog-card" v-for="item in timeline" :key="item.title">
                <!-- bind either a class or an inline style depending on the data -->
                <div
                    class="blog-thumb"
                    :class="item.thumbClass"
                    :style="item.thumbStyle"
                >
                    <div class="img-placeholder">{{ item.tag }}</div>
                </div>
                <div class="blog-info">
                    <div class="blog-tag">{{ item.tag }}</div>
                    <div class="blog-date">{{ item.date }}</div>
                    <div class="blog-title">{{ item.title }}</div>
                    <p class="blog-excerpt">{{ item.excerpt }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const timeline = [
    {
        thumbClass: "blog-thumb-1",
        tag: "Work",
        date: "Aug 2024 – Present",
        title: "Junior PHP Developer · Unijaya Resources",
        excerpt:
            "Developing and maintaining Laravel web apps for government systems — RESTful APIs, MySQL optimization, JasperReports integration and Git collaboration.",
    },
    {
        thumbClass: "blog-thumb-2",
        tag: "Internship",
        date: "Aug 2023 – Jan 2024",
        title: "IT Support · Interlink Impact Holding",
        excerpt:
            "Provided IT support, managed company projects including clinic openings (40% process improvement), and assisted with quotations and invoicing.",
    },
    {
        thumbStyle: "background: linear-gradient(135deg, #1f1a0e, #2e2610);",
        tag: "Education",
        date: "Aug 2021 – Jan 2024",
        title: "Diploma in Information Technology · UTHM",
        excerpt:
            "Universiti Tun Hussein Onn Malaysia. Final CGPA 3.42, with Dean's List awards in 2021 and 2022.",
    },
];
</script>
