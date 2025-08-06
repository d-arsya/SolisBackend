# SOLIS Backend - Sign Language SOS 🧏‍♀️⚠️

SOLIS (Sign Language SOS) adalah backend dari aplikasi berbasis AI yang dirancang untuk membantu penyandang tuli dalam mengakses layanan darurat melalui penerjemahan Sistem Isyarat Bahasa Indonesia (SIBI) ke teks real-time dan komunikasi dua arah berbasis teks antara pengguna dan petugas call center darurat.

## 🔧 Teknologi yang Digunakan

- Next.js (API routes) – sebagai server backend
- Supabase – untuk autentikasi dan database pengguna
- WebSocket / REST API – untuk komunikasi real-time antara pengguna dan petugas
- JWT (JSON Web Token) – untuk otentikasi pengguna
- Vercel / Node.js Server – sebagai environment deployment
- TypeScript – bahasa pemrograman utama

## 🧠 Fitur Utama

- Autentikasi pengguna (register, login, logout)
- Endpoint komunikasi darurat berbasis teks
- Kirim dan terima pesan teks real-time
- Pengiriman lokasi pengguna otomatis (GPS)
- Manajemen akun pengguna (data profil)
- Riwayat komunikasi darurat

## 📁 Struktur Folder

```
├───app
│ └───api
│ ├───auth
│ │ ├───login # Endpoint untuk login pengguna
│ │ ├───refresh # Endpoint untuk refresh token (opsional)
│ │ └───register # Endpoint untuk registrasi pengguna baru
│ ├───docs # Dokumentasi Swagger atau API Explorer
│ └───me # Endpoint untuk mengambil profil pengguna
├───lib # Utility umum seperti Supabase client, JWT, dsb
├───service # Logika bisnis, komunikasi ke database/API eksternal
└───types # Tipe TypeScript untuk user, request, response, dll
```

## 🔐 Autentikasi

Autentikasi dilakukan menggunakan JWT berbasis Supabase. Setelah login, token akan disimpan di Authorization header untuk akses endpoint terproteksi.

## 📡 Daftar Endpoint API

### 🧾 Autentikasi (`/auth`)

| Method | Endpoint         | Deskripsi                                      |
| ------ | ---------------- | ---------------------------------------------- |
| POST   | `/auth/login`    | Login pengguna dan mendapatkan JWT token       |
| POST   | `/auth/refresh`  | Refresh access token menggunakan refresh token |
| POST   | `/auth/register` | Registrasi pengguna baru                       |

### 👤 Profil Pengguna

| Method | Endpoint | Deskripsi                                   |
| ------ | -------- | ------------------------------------------- |
| GET    | `/me`    | Mengambil profil pengguna yang sedang login |

### 🌐 General

| Method | Endpoint | Deskripsi                |
| ------ | -------- | ------------------------ |
| GET    | `/`      | Endpoint Hello World API |

## 💡 Cara Menjalankan Lokal

1. Clone repo ini:
   `git clone https://github.com/d-arsya/TemanKikoBackend`

2. Install dependensi:
   `npm install --force`

3. Buat file .env.local

4. Jalankan server: ` npm run dev`

## 🧪 Pengujian

- Gunakan Postman atau Insomnia untuk mencoba endpoint.
- Unit test dapat ditambahkan dengan framework seperti Jest (belum disediakan default-nya).

## 🧭 Integrasi Frontend

- Mobile App: React Native
- ML Model: TensorFlow.js / ONNX Runtime (dijalankan di perangkat)
- Dashboard Web (Petugas): Dibangun dengan Vite

Semua komunikasi antara mobile dan dashboard difasilitasi oleh backend ini melalui API dan database Supabase.

## 👨‍💻 Tim Pengembang

- Dimal Karim Ahmad – Universitas Gadjah Mada
- Poernomo Maulana Rofif Aqilla – Universitas Gadjah Mada
- Kamaluddin Arsyad Fadllillah – Universitas Gadjah Mada

## 📃 Lisensi

MIT License – bebas digunakan dan dimodifikasi untuk tujuan non-komersial dan pengembangan solusi inklusif.

SOLIS dikembangkan sebagai solusi darurat inklusif berbasis AI untuk mendukung aksesibilitas penyandang tuli. Jadikan darurat lebih inklusif. 💬📱
