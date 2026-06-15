<!-- ServicesSection.vue — four expertise cards.
     Stored in an array and rendered with v-for.
     Add a 5th? Just add to the array. -->
<template>
    <section id="services">
        <div class="services-header" v-fade-in>
            <div>
                <div class="section-eyebrow">What I Do</div>
                <h2 class="section-title">my<br />expertise</h2>
            </div>
            <p class="section-desc">
                I live on the backend — building things that work, fixing things
                that don't, and making slow queries fast. Here's what I'm good
                at. 👇
            </p>
        </div>

        <div class="services-grid" v-fade-in>
            <div
                class="service-card"
                v-for="service in services"
                :key="service.num"
            >
                <div class="service-num">{{ service.num }}</div>
                <div class="service-title">{{ service.title }}</div>
                <ul class="service-list">
                    <li v-for="item in service.items" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        num: "01",
        title: "Backend Development",
        items: [
            "Web applications with the Laravel framework",
            "MVC architecture and clean, maintainable code",
            "New feature development on existing systems",
            "Following software development best practices",
        ],
    },
    {
        num: "02",
        title: "RESTful API Development",
        items: [
            "Data passing, receiving and updating endpoints",
            "Batch processing for large datasets",
            "API testing and validation with Postman",
            "Reliable, well-structured API design",
        ],
    },
    {
        num: "03",
        title: "Database & Optimization",
        items: [
            "MySQL and PostgreSQL database management",
            "Query optimization with indexing & caching",
            "Resolving N+1 and performance bottlenecks",
            "Schema design and data integrity",
        ],
    },
    {
        num: "04",
        title: "Systems & Integration",
        items: [
            "Maintaining and debugging existing systems",
            "JasperReports integration for automated reports",
            "Performance enhancement of live applications",
            "Version control with Git & GitHub",
        ],
    },
];
</script>
