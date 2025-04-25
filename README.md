# 📚 Library Management System API

A robust backend API for managing a Library Management System. This API allows library staff and members to handle books, memberships, and borrowing activities through intuitive endpoints built using **Node.js**, **Express.js**, **Prisma ORM**, **TypeScript**, and **PostgreSQL**.

---

## 🔗 Live URL

[https://your-live-url-here.com](https://your-live-url-here.com)

---

## 🛠️ Technology Stack & Packages

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **TypeScript** – Type-safe JavaScript
- **PostgreSQL** – Relational database
- **Prisma ORM** – Database management
- **UUID** – For unique entity identifiers
- **dotenv** – Environment configuration
- **cors**, – Middleware for security and logging

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rajuahmmed111/Assignment-SQL-8.git
cd Assignment-SQL-8
npm install
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
PORT=5000
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```



🧠 Key Features & Functionality
📘 Book Management
Create a Book: POST /api/books

Get All Books: GET /api/books

Get Book by ID: GET /api/books/:bookId

Update Book: PUT /api/books/:bookId

Delete Book: DELETE /api/books/:bookId

👤 Member Management
Create a Member: POST /api/members

Get All Members: GET /api/members

Get Member by ID: GET /api/members/:memberId

Update Member: PUT /api/members/:memberId

Delete Member: DELETE /api/members/:memberId

📕 Borrowing System
Borrow a Book: POST /api/borrow

Return a Book: POST /api/return

🕐 Overdue Tracking (Bonus)
List Overdue Books: GET /api/borrow/overdue


🐞 Known Issues/Bugs
Book availability is not yet restricted to ensure atomic transactions (can cause race conditions under heavy traffic).

Due date logic for returns assumes a fixed 14-day policy but does not yet notify users automatically.J