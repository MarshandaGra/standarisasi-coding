# Standarisasi Coding — Tugas Pengujian & Integrasi

## 📋 Deskripsi
Project latihan penerapan standar pengujian (pola AAA, struktur unit test) dan integrasi kode otomatis menggunakan GitHub Actions CI pada modul **Todo List**.

## 🛠️ Teknologi
- Node.js v20
- Jest (testing)
- ESLint (linting)
- Prettier (formatting)
- GitHub Actions (CI/CD Pipeline)

## 🚀 Cara Menjalankan
```bash
npm install
npm test
npm run test:coverage
npm run lint
npm run format:check
```

## 📁 Struktur
- `src/` → source code (`User.js`)
- `tests/` → unit test (`User.test.js`)
- `.github/` → CI workflow (`ci.yml`)

## 👤 Author
- Nama: Marshanda Gracella Andryanta
- NIM: E41250025

## 📝 Catatan
- Semua test mengikuti pola struktur AAA (Arrange, Act, Assert) secara konsisten.
- Penamaan test menggunakan format deskriptif: `should [behavior] when [condition]`.
- Coverage target: 80%+ (tercapai: 100%).