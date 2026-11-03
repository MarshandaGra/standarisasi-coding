# Analisis Kasus: Tim dengan 15 Developer

## 1. Identifikasi Masalah

Berdasarkan skenario:

- 15 developer, semua commit langsung ke `main`
- Tidak ada CI/CD
- Test coverage 25%
- Bug di production terjadi setiap minggu

### Masalah Utama

| #   | Masalah                   | Dampak                                                 |
| --- | ------------------------- | ------------------------------------------------------ |
| 1   | Tidak ada branch strategy | Konflik merge dan `main` sering rusak                  |
| 2   | Tidak ada code review     | Kode berkualitas rendah mudah masuk ke produksi        |
| 3   | Tidak ada CI/CD           | Bug tidak terdeteksi sebelum masuk ke production       |
| 4   | Coverage 25%              | Regresi tidak terdeteksi dengan baik                   |
| 5   | Tidak ada quality gate    | Tidak ada standar minimum kualitas yang harus dipenuhi |

### Akar Masalah

**Kurangnya standarisasi proses integrasi kode** — seluruh developer bekerja tanpa kontrak yang jelas mengenai cara kode diintegrasikan dan diperiksa.

## 2. Standar yang Harus Diterapkan Pertama

### Prioritas 1 (Minggu 1-2): Branch Protection + Code Review

- Alasan: Ini adalah langkah paling krusial untuk menghentikan kerusakan yang terjadi. Tanpa ini, semua perbaikan lain akan sia-sia karena `main` tetap bisa rusak.
- Aksi: Aktifkan branch protection di `main` dan wajibkan minimal 1 reviewer.

### Prioritas 2 (Minggu 3-4): CI Sederhana

- Alasan: Deteksi dini terhadap build dan test akan mencegah bug masuk lebih cepat.
- Aksi: Gunakan GitHub Actions minimal, misalnya lint + test.

### Prioritas 3 (Minggu 5-8): Naikkan Coverage Bertahap

- Alasan: Tidak realistis untuk langsung naik dari 25% ke 80% dalam waktu singkat.
- Aksi: Target kenaikan sekitar +10% setiap 2 minggu.

### Prioritas 4 (Minggu 9-12): Quality Gate + CD

- Alasan: Setelah budaya dan proses mulai stabil, otomatisasi penuh dapat diterapkan.
- Aksi: Gunakan coverage threshold di CI dan auto-deploy ke staging.

## 3. Roadmap 3 Bulan

### Bulan 1 — Fondasi

- [ ] Aktifkan branch protection di `main`
- [ ] Terapkan conventional commits
- [ ] Wajib PR + 1 reviewer
- [ ] Siapkan CI dasar (lint + test)
- [ ] Sosialisasikan standar kepada seluruh tim

### Bulan 2 — Peningkatan

- [ ] Coverage naik ke 50%
- [ ] Wajib unit test untuk fitur baru
- [ ] Siapkan reporting coverage (misalnya Codecov)
- [ ] Mulai checklist code review
- [ ] Refactor 5 modul paling kritis dengan test

### Bulan 3 — Otomasi Penuh

- [ ] Coverage naik ke 70%
- [ ] Quality gate aktif (CI gagal jika coverage turun)
- [ ] CD ke staging otomatis
- [ ] Dokumentasi standar lengkap
- [ ] Retrospective dan ukur bug di production

## 4. Metrik Keberhasilan

| Metrik                    | Baseline | Target 3 Bulan |
| ------------------------- | -------- | -------------- |
| Test coverage             | 25%      | ≥ 70%          |
| Bug production per minggu | ~5       | ≤ 1            |
| Waktu merge PR            | ?        | < 1 hari       |
| Broken main per bulan     | ?        | 0              |
| Waktu code review         | ?        | < 4 jam        |

## Kesimpulan

Tim ini menghadapi masalah utama pada proses integrasi dan kualitas kode, bukan hanya pada kode itu sendiri. Dengan penerapan branch protection, review, CI, dan peningkatan coverage secara bertahap, tim dapat membangun sistem yang lebih aman, terdokumentasi, dan minim kesalahan di production.
