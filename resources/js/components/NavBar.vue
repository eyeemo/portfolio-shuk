<!-- NavBar.vue — the fixed top navigation.
     Minimal: just a light/dark theme toggle on the right.
     (Page is short, so visitors just scroll — no menu links.) -->
<template>
    <nav>
        <div class="nav-actions">
            <!-- Light/dark theme switch — pill that slides a sun↔moon circle.
                 The hidden checkbox drives the CSS; isDark keeps it in sync. -->
            <label class="theme-switch" ref="toggleEl">
                <input
                    type="checkbox"
                    class="theme-switch__checkbox"
                    :checked="isDark"
                    @change="toggleTheme"
                    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                />
                <span class="theme-switch__container">
                    <span class="theme-switch__circle"></span>
                    <Sun class="theme-switch__icon ts-sun" :size="13" />
                    <Moon class="theme-switch__icon ts-moon" :size="13" />
                </span>
            </label>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Sun, Moon } from "lucide-vue-next";

// whether dark theme is active
const isDark = ref(false);
const toggleEl = ref(null);

// Set the theme on <html> so the CSS [data-theme="dark"] overrides kick in.
function applyTheme(dark) {
    isDark.value = dark;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}

// Flip the theme. When the browser supports the View Transitions API we play
// a circular reveal — the new theme expands as a circle from the toggle.
function toggleTheme() {
    const next = !isDark.value;
    const commit = () => {
        applyTheme(next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    if (!document.startViewTransition || !toggleEl.value) {
        commit();
        return;
    }

    // origin = centre of the toggle button
    const r = toggleEl.value.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(commit);
    transition.ready.then(() => {
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 550,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            },
        );
    });
}

onMounted(() => {
    // Saved choice wins; otherwise default to dark (moon).
    const saved = localStorage.getItem("theme");
    applyTheme(saved ? saved === "dark" : true);
});
</script>
