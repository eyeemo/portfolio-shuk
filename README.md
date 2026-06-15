# Portfolio — Laravel + Vue 3 + Tailwind v4

Personal portfolio website. A single-page design served by Laravel, rendered with Vue 3 single-file components, styled with Tailwind v4, and bundled by Vite.

- **Backend:** Laravel 13 (PHP 8.3)
- **Frontend:** Vue 3 (`<script setup>` SFCs) + Tailwind CSS v4
- **Build tool:** Vite 7 (`laravel-vite-plugin`)
- **Database:** SQLite (`database/database.sqlite`)

---

## Keperluan (Prerequisites)

| Tool | Versi minimum | Nota |
|------|--------------|------|
| **PHP** | **8.3** | Laravel 13 perlukan `^8.3`. PHP 8.2 akan **gagal** (`platform_check.php`). |
| **Composer** | 2.x | Untuk dependency PHP. |
| **Node.js** | 20+ | Project ni guna v22. |
| **npm** | 10+ | — |
| Extension PHP | `pdo_sqlite`, `sqlite3` | Mesti **enabled** dalam `php.ini` (DB guna SQLite). |

> **Pengguna Laragon:** set versi PHP ke **8.3** dulu —
> right-click ikon Laragon → **PHP → Version → php-8.3.x** → **Reload**.
> Kalau tak, `php` dalam terminal akan default ke versi lama (cth 8.2) dan project tak boleh jalan.

---

## Setup pertama kali

```bash
# 1. Dependencies
composer install
npm install

# 2. Environment
cp .env.example .env        # (skip kalau .env dah ada)
php artisan key:generate    # (skip kalau APP_KEY dah ada)

# 3. Database (SQLite)
#    Pastikan fail kosong wujud, lepas tu migrate.
#    Windows PowerShell: New-Item database/database.sqlite -ItemType File
php artisan migrate
```

### Kalau `php artisan migrate` bagi error "could not find driver"
Extension SQLite belum on. Buka `php.ini` PHP kau, buang `;` di depan dua baris ni:

```ini
extension=pdo_sqlite
extension=sqlite3
```

Simpan, restart terminal (atau Laragon), cuba semula.

---

## Jalankan project (development)

Perlukan **dua terminal berasingan** — dua-dua command jalan berterusan:

**Terminal 1 — frontend (Vite hot-reload):**
```bash
npm run dev
```

**Terminal 2 — backend (Laravel):**
```bash
php artisan serve
```

Buka browser → **http://127.0.0.1:8000**

> **Alternatif (Laragon):** kalau Laragon dah set PHP 8.3 dan kau akses melalui
> URL Laragon (cth `http://portfolio-laravel.test`), kau **tak perlu** `php artisan serve`.
> Apache/Nginx Laragon handle backend — cukup `npm run dev` sahaja dalam satu terminal.

### Error PowerShell: "running scripts is disabled on this system"
PowerShell block `npm.ps1`. Benarkan script untuk user kau (sekali sahaja):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Atau elak terus dengan guna `npm.cmd run dev`.

---

## Build untuk production

```bash
npm run build      # hasilkan public/build/ (CSS + JS)
```

Laravel akan serve fail yang dah di-build secara automatik melalui `@vite(...)` dalam Blade.

---

## Struktur penting

```
resources/
  css/app.css              # semua style global portfolio
  js/
    app.js                 # entry point Vue — mount #app
    components/
      App.vue              # root, susun semua section
      NavBar.vue
      HeroSection.vue
      ServicesSection.vue
      AboutSection.vue
      ProjectsSection.vue
      TestimonialsSection.vue
      FaqSection.vue
      BlogsSection.vue
      ContactSection.vue   # contact form (POST ke /contact)
      SiteFooter.vue
    directives/
      fadeIn.js            # v-fade-in: animasi fade masa scroll
  views/
    welcome.blade.php      # shell HTML, boot Vue app
routes/
  web.php                  # GET / dan POST /contact
```

## Contact form

Form contact POST ke route `/contact`. Buat masa ni Laravel cuma **validate + log** mesej
(`Log::info`) — **tidak** hantar email atau simpan ke DB. Untuk tukar, edit `routes/web.php`
dan ganti dengan `Mail::to(...)->send(...)` atau simpan ke database.

---

## Troubleshooting ringkas

| Masalah | Punca | Penyelesaian |
|---------|-------|--------------|
| `Composer detected issues... requires PHP >= 8.3.0` | Terminal guna PHP < 8.3 | Tukar PHP ke 8.3 (Laragon → PHP → Version) |
| `could not find driver` (SQLite) | `pdo_sqlite`/`sqlite3` mati | Enable dalam `php.ini` |
| `Migration table not found` | Belum migrate | `php artisan migrate` |
| `npm... scripts is disabled` | PowerShell execution policy | `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| CSS/JS tak load | Belum build / Vite tak jalan | `npm run dev` (dev) atau `npm run build` (prod) |
