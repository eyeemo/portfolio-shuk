<!-- ContactSection.vue — a REAL working form.
    Concepts shown here:
    - v-model: two-way binding between inputs and the `form` object
    - reactive() : make an object reactive
    - @submit.prevent : handle submit in JS (no page reload)
    - async/await fetch : send data to the Laravel backend (POST /contact)
    - conditional rendering (v-if) for success / error messages
-->
<template>
    <section id="contact">
        <div class="contact-layout">
            <div v-fade-in>
                <div class="section-eyebrow">Contact</div>
                <h2 class="section-title">Let's work<br />together</h2>
                <p class="section-desc contact-intro">
                    Looking for my next opportunity. If you think we'd be a good
                    fit, don't hesitate to reach out!
                </p>

                <!-- .prevent stops the browser's default form submit (page reload) -->
                <!-- <form class="contact-form" @submit.prevent="submit">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Name</label> -->
                <!-- v-model keeps form.name and this input in sync both ways -->
                <!-- <input
                                type="text"
                                v-model="form.name"
                                placeholder="Your full name"
                            />
                            <span class="field-error" v-if="errors.name">{{
                                errors.name[0]
                            }}</span>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                v-model="form.email"
                                placeholder="your@email.com"
                            />
                            <span class="field-error" v-if="errors.email">{{
                                errors.email[0]
                            }}</span>
                        </div>
                    </div> -->

                <!-- <div class="form-group">
                        <label>Service Needed</label>
                        <select v-model="form.service">
                            <option value="">Select a service...</option>
                            <option>Branding</option>
                            <option>Web Design</option>
                            <option>UI / UX Design</option>
                            <option>Graphic Design</option>
                        </select>
                    </div> -->

                <!-- <div class="form-group">
                        <label>Message</label>
                        <textarea
                            v-model="form.message"
                            placeholder="Tell me about your project..."
                        ></textarea>
                        <span class="field-error" v-if="errors.message">{{
                            errors.message[0]
                        }}</span>
                    </div> -->

                <!-- :disabled binds to the `sending` flag so you can't double-submit -->
                <!-- <button class="btn-submit" :disabled="sending">
                        {{ sending ? "Sending…" : "Send Message →" }}
                    </button> -->

                <!-- v-if shows these only when there is something to show -->
                <!-- <p class="form-feedback success" v-if="success">
                        ✓ Thanks! Your message has been received.
                    </p>
                    <p class="form-feedback error" v-if="failed">
                        Something went wrong. Please try again.
                    </p> -->
                <!-- </form> -->
            </div>

            <div class="contact-info" v-fade-in>
                <div class="contact-info-item">
                    <label>Email</label>
                    <a href="mailto:muhammadshukri2332@gmail.com"
                        >muhammadshukri2332@gmail.com</a
                    >
                </div>
                <div class="contact-info-item">
                    <label>Location</label>
                    <a href="#">Malaysia</a>
                </div>
                <div class="contact-info-item">
                    <label>Find Me</label>
                    <div class="social-links">
                        <a
                            href="https://github.com/eyeemo"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-btn"
                            title="GitHub"
                            ><BrandIcon :path="siGithub.path" :size="18"
                        /></a>
                        <a
                            href="https://www.linkedin.com/in/shukri-aman-51b8b3255"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-btn"
                            title="LinkedIn"
                            ><BrandIcon :path="linkedinPath" :size="18"
                        /></a>
                        <a
                            href="mailto:muhammadshukri2332@gmail.com"
                            class="social-btn"
                            title="Email"
                            ><Mail :size="18"
                        /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Mail } from "lucide-vue-next";
import { siGithub } from "simple-icons";
import BrandIcon from "./BrandIcon.vue";
import { linkedinPath } from "../icons.js";

// reactive() is like ref() but for whole objects. form.name, form.email etc.
// stay in sync with the inputs via v-model.
const form = reactive({
    name: "",
    email: "",
    service: "",
    message: "",
});

const sending = ref(false); // true while the request is in-flight
const success = ref(false); // show the green message
const failed = ref(false); // show the red message
const errors = ref({}); // validation errors returned by Laravel

async function submit() {
    sending.value = true;
    success.value = false;
    failed.value = false;
    errors.value = {};

    try {
        // Laravel needs the CSRF token for POST requests. We read it from the
        // <meta name="csrf-token"> tag added in welcome.blade.php.
        const token = document.querySelector('meta[name="csrf-token"]').content;

        const response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token,
                Accept: "application/json",
            },
            body: JSON.stringify(form),
        });

        if (response.status === 422) {
            // 422 = validation failed. Laravel sends back which fields are wrong.
            const data = await response.json();
            errors.value = data.errors;
            return;
        }

        if (!response.ok) throw new Error("Request failed");

        // Success: show message and clear the form.
        success.value = true;
        form.name = "";
        form.email = "";
        form.service = "";
        form.message = "";
    } catch (e) {
        failed.value = true;
    } finally {
        sending.value = false;
    }
}
</script>
