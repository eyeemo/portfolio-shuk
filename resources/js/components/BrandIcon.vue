<!-- BrandIcon.vue — renders a brand logo from an SVG path string.
     Used for simple-icons (e.g. siGithub.path) and any manual path
     (e.g. LinkedIn, which simple-icons no longer ships).
     Usage: <BrandIcon :path="siGithub.path" :size="18" /> -->
<template>
    <svg
        role="img"
        viewBox="0 0 24 24"
        :width="size"
        :height="size"
        fill="currentColor"
    >
        <path :d="path" />
    </svg>
</template>

<script setup>
defineProps({
    path: { type: String, required: true },
    size: { type: [Number, String], default: 16 },
});
</script>
