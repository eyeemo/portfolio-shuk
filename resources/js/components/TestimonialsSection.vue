<!-- TestimonialsSection.vue — repurposed into Achievements & Involvement.
     Two arrays drive two lists. The avatar initials are computed
     from each title with a small helper function. -->
<template>
    <section id="testimonials">
        <div class="testimonials-layout">
            <div class="testimonials-grid" v-fade-in>
                <div class="section-eyebrow">Achievements</div>
                <h2 class="section-title" style="margin-bottom: 32px">
                    Achievements &amp;<br />Involvement
                </h2>

                <div
                    class="testimonial-card"
                    v-for="a in achievements"
                    :key="a.title"
                >
                    <p class="testimonial-text">{{ a.text }}</p>
                    <div class="testimonial-author">
                        <!-- initials(a.title) turns "Dean's List" into "DL" -->
                        <div class="testimonial-avatar">
                            {{ initials(a.title) }}
                        </div>
                        <div>
                            <div class="testimonial-name">{{ a.title }}</div>
                            <div class="testimonial-role">{{ a.meta }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="testimonials-stats" v-fade-in>
                <div
                    class="big-stat"
                    v-for="stat in bigStats"
                    :key="stat.label"
                >
                    <div class="num">{{ stat.num }}</div>
                    <div class="label">{{ stat.label }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const achievements = [
    {
        title: "Dean's List Award",
        meta: "2021 & 2022 · UTHM",
        text: "Awarded the Dean's List in 2021 and 2022, maintaining a GPA above 3.0 in every semester throughout the diploma.",
    },
    {
        title: "FYP Project Leader",
        meta: "MAB Repository",
        text: "Led the final year project team to successfully develop the MAB Repository website under the Malaysian Association for the Blind.",
    },
    {
        title: "Clinic Opening Project",
        meta: "Interlink Impact Holding",
        text: "Managed the clinic opening project and improved the opening process by 40% through better planning and coordination.",
    },
    {
        title: "Show-Tech 2023",
        meta: "Secretary · MARDI",
        text: "Served as technical support and secretary for the Show-Tech 2023 program organised by MARDI.",
    },
    {
        title: "Crown Sport Challenge",
        meta: "PIC · KBS",
        text: "Acted as person-in-charge for the Crown Sport Challenge programme, supported by Kementerian Belia dan Sukan (KBS).",
    },
];

const bigStats = [
    { num: "2", label: "Dean's List awards during diploma" },
    { num: "40%", label: "Improvement in the clinic opening process" },
    { num: "4+", label: "Programs and events led or supported" },
];

// A plain JS function usable inside the template.
// "Dean's List Award" -> ["Dean's","List","Award"] -> "DL"
function initials(title) {
    return title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}
</script>
