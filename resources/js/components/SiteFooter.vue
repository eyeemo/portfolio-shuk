<!-- SiteFooter.vue — small static footer.
     `year` is computed once so you never hard-code the year again. -->
<template>
    <footer>
        <p>© {{ year }} Shukri Aman. All rights reserved.</p>
        <p>Built with Laravel + Vue · <a href="#top">Back to top ↑</a></p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
