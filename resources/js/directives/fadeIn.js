/* ============================================================
   A custom Vue directive: v-fade-in

   In the original index.html this was done with a global
   IntersectionObserver in a <script> tag. In Vue, the clean way
   to attach "DOM behaviour" to an element is a directive.

   Usage in a template:   <div v-fade-in> ... </div>

   `mounted` runs once, right after the element is inserted into
   the page. We add the .fade-in class (starts invisible) and use
   an IntersectionObserver to add .visible when it scrolls into view.
   ============================================================ */

export default {
    mounted(el) {
        el.classList.add('fade-in');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
    },
};
