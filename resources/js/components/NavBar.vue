<!-- NavBar.vue — the fixed top navigation.
     Minimal: just a light/dark theme toggle on the right.
     (Page is short, so visitors just scroll — no menu links.) -->
<template>
    <nav>
        <div class="nav-actions">
            <!-- Light/dark theme switch — pill that slides a sun↔moon circle.
                 The hidden checkbox drives the CSS; isDark keeps it in sync. -->
            <label class="theme-switch">
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

// Set the theme on <html> so the CSS [data-theme="dark"] overrides kick in.
function applyTheme(dark) {
    isDark.value = dark;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}

// Flip the theme and remember the choice for next visit.
function toggleTheme() {
    const next = !isDark.value;
    applyTheme(next);
    localStorage.setItem("theme", next ? "dark" : "light");
}

onMounted(() => {
    // Use the saved choice if any, otherwise follow the OS light/dark setting.
    const saved = localStorage.getItem("theme");
    if (saved) applyTheme(saved === "dark");
    else applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
});
</script>
