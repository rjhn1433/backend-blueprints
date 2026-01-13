# Backend Blueprints 🚀

This repository contains a collection of backend projects built while learning and practicing **Node.js backend development**. Each project is designed to be a modular "blueprint" for common backend patterns.

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** SQLite
* **Security:** JWT Authentication & bcrypt (password hashing)

---

## Projects

### 1. express-api-starter
A clean, minimal Express starter template for bootstrapping REST APIs. Includes basic error handling and middleware setup.

### 2. jwt-auth-todo-api
A secure Todo application featuring:
* **User Management:** Register and Login.
* **Authentication:** JWT-based stateless auth.
* **Security:** Password hashing with bcrypt.
* **CRUD Operations:** Full Todo management using SQLite.

---

## How to Run

### Prerequisites
* [Node.js](https://nodejs.org/) installed (v14 or higher recommended).
* A tool like **Postman** or **Insomnia** to test endpoints.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rjhn1433/backend-blueprints.git
   cd backend-blueprints
   ```

2. **Install dependencies (inside any project):**
   ```bash
   cd jwt-auth-todo-api
   npm install
   ```

3. **Run the project:**
   ```bash
   npm run dev
   ```