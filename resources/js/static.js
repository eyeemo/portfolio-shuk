/* ============================================================
   static.js — entry for the static (GitHub Pages) build only.

   It pulls in the stylesheet (which Laravel normally loads as a
   separate @vite input) and then runs the same app.js that mounts
   the Vue app. Keeping this separate means the Laravel setup is
   left completely untouched.
   ============================================================ */

import '../css/app.css';
import './app.js';
