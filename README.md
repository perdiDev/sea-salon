# SEA SALON Documentation

Link website: https://sea-salon-sand.vercel.app/

## 🚀 Instalasi

Disarankan untuk menggunakan pnpm agar tidak ada kesalahan yang terjadi.

### 📦 Clone this repo

```bash
git clone https://example.com/sea-salon.git
```

### 📥 Install dependensi

```bash
pnpm install
```

### 🔧 Setup Environment

Untuk memulai env, Anda perlu login ke [Supabase](https://supabase.com) untuk mendapatkan anonkey, url, dan direct url.

1. Mendapatkan NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di Supabase

![alt text](<Screenshot 2024-07-02 175459.png>)

2. Mendapatkan DATABASE_URL dan DIRECT_URL di Supabase
   ![alt text](<Screenshot 2024-07-02 180336.png>)

```env
NEXT_PUBLIC_SUPABASE_URL=<Your_Supbase_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Your_anon_Key>

DATABASE_URL=<Your_URL>?pgbouncer=true&connection_limit=1
DIRECT_URL=<Your_URL>
```

### 🗂️ Prisma Init

```bash
pnpm dlx prisma init
```

### 🔄 Prisma Migrate

```bash
pnpm prisma migrate dev --name init
```

### 🔄 Prisma Seed Database

```bash
pnpm seed
```

### ▶️ Run Development Mode

```bash
pnpm run dev
```

## ✨ Fitur

- Homepage ✅
- Review with Persistent data (Use Database) ✅
- Authentication ✅
- Reservation with Authenticated user ✅
- Admin

## 🛠️ Technology Stack

- **NextJS**: Framework development for fullstack app
- **Supabase**: Authentication provider
- **Supabase**: Serverless drive for database
- **Prisma**: ORM that integrated application with Supabase
- **Vercel**: Deployment application
- **PNPM**: Package organizer
- **Database**: PostgreSQL (implicit)
- **and Other NPM Packages**

## 👨‍💼 Informasi Diri

- **Nama**: Perdi
- **Pekerjaan**: Mahasiswa
- **Kampus**: Universitas Hasanuddin (Teknik Informatika)
- **Asal**: Makassar, Sulawesi Selatan

## 🙏 Semoga DILOLOSKAN PANITIA. AAMIIIN.
