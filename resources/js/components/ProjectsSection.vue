<!-- ProjectsSection.vue — featured project cards.
     Each project has its own `thumb` class for the gradient.
     We bind that class dynamically with :class="project.thumb". -->
<template>
    <section id="projects">
        <div class="projects-header" v-fade-in>
            <div>
                <div class="section-eyebrow">My Work</div>
                <h2 class="section-title">Stuff I've Built</h2>
            </div>
        </div>

        <div class="projects-grid" v-fade-in>
            <div
                class="project-card"
                v-for="project in projects"
                :key="project.name"
            >
                <!-- two classes: a fixed one + a dynamic one from the data -->
                <div class="project-thumb" :class="project.thumb">
                    <div class="img-placeholder">[ Project Image ]</div>
                </div>
                <div class="project-info">
                    <div class="project-tag">{{ project.tag }}</div>
                    <div class="project-name">{{ project.name }}</div>
                    <p class="project-desc">{{ project.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        thumb: "project-thumb-1",
        tag: "Laravel · Day Job",
        name: "Government Systems",
        desc: "Where most of my 9-to-5 goes. Building and keeping Laravel apps alive for government clients — new features, bug hunts, and the occasional fire to put out. 🔥",
    },
    {
        thumb: "project-thumb-2",
        tag: "REST API",
        name: "APIs That Move Data",
        desc: "APIs that shuffle data around without breaking a sweat — even when it's thousands of records at once. Battle-tested with Postman before they ever go live.",
    },
    {
        thumb: "project-thumb-3",
        tag: "Automation",
        name: "Self-Writing Reports",
        desc: "Made boring reports generate themselves. Wired up JasperReports so the system spits out the right PDF with the right data — zero manual copy-paste.",
    },
    {
        thumb: "project-thumb-4",
        tag: "Final Year Project",
        name: "MAB Repository",
        desc: "My final year baby. Led the team to build a web repository for the Malaysian Association for the Blind — from blank canvas to a live, working site.",
    },
];
</script>
