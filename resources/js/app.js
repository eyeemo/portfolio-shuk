/* ============================================================
   app.js — the entry point for our Vue application.

   Vite bundles this file (see vite.config.js). Laravel loads it
   in the page via @vite(['resources/js/app.js']) in the Blade view.

   Steps below:
   1. import Vue's createApp function
   2. import our root component <App />
   3. register a small custom directive (v-fade-in) for scroll animation
   4. mount the app onto the <div id="app"> element in the Blade view
   ============================================================ */

import { createApp } from 'vue';
import App from './components/App.vue';
import fadeIn from './directives/fadeIn';
// Importing the logo lets Vite hash it and give the correct URL in every
// build (Laravel /build/… and the static GitHub Pages build).
import faviconUrl from '../images/sa-log-web.png';

// Set the browser-tab icon (favicon) to the "sa" logo.
const favicon =
    document.querySelector("link[rel~='icon']") || document.createElement('link');
favicon.rel = 'icon';
favicon.href = faviconUrl;
document.head.appendChild(favicon);

// createApp(App) builds a Vue application using App.vue as the root component.
const app = createApp(App);

// A "directive" is reusable behaviour you attach to an element with v-something.
// Here v-fade-in makes any element fade upward into view as you scroll to it.
app.directive('fade-in', fadeIn);

// Finally, render the app inside <div id="app"></div> (defined in welcome.blade.php).
app.mount('#app');
