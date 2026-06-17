<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {{-- CSRF token: the Vue contact form reads this to POST safely to Laravel --}}
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>Shukri Aman — Backend Developer</title>

    {{-- Google Fonts used by the design --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet">

    {{-- Set the theme before the page paints so there is no light→dark flash --}}
    <script>
        (function() {
            // default to dark (moon) unless the visitor previously chose otherwise
            var t = localStorage.getItem("theme") || "dark";
            document.documentElement.setAttribute("data-theme", t);
        })();
    </script>

    {{-- @vite loads our bundled CSS + JS. In dev it hot-reloads; in prod it
       serves the built files from public/build. --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    {{-- Vue mounts the entire app inside this single div (see app.js). --}}
    <div id="app"></div>
</body>

</html>
