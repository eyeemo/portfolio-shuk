<!-- NavBar.vue — the fixed top navigation.
    `links` is a small array; v-for renders one <li> per link.
    This is your first taste of "data-driven HTML": change the
    array and the menu updates automatically.

    On mobile the links collapse behind a hamburger button. `open`
    tracks whether that dropdown is showing; clicking a link or the
    button toggles it. -->
<template>
    <nav>
        <div class="nav-logo">
            <!-- <div class="nav-avatar"></div>
        <span class="nav-name"></span> -->
        </div>

        <!-- Hamburger — only visible on mobile (see app.css).
            aria-* attributes keep it accessible to screen readers. -->
        <button
            class="nav-toggle"
            :class="{ open }"
            @click="open = !open"
            aria-label="Toggle navigation menu"
            :aria-expanded="open"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- :class adds 'open' so the mobile dropdown can slide in. -->
        <ul class="nav-links" :class="{ open }">
            <!-- v-for loops over the array. :key helps Vue track each item. -->
            <li v-for="link in links" :key="link.href">
                <!-- closing the menu on click keeps mobile nav tidy -->
                <a
                    :href="link.href"
                    :class="{ 'nav-cta': link.cta }"
                    @click="open = false"
                    >{{ link.label }}</a
                >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from "vue";

// whether the mobile dropdown is open
const open = ref(false);

const links = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#services" },
    { label: "Experience", href: "#blogs" },
    { label: "Contact", href: "#contact", cta: true },
];
</script>
