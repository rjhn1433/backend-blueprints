import { DatabaseSync } from 'node:sqlite'

// Create an in-memory SQLite database (temporary, stored in RAM)
const db = new DatabaseSync(':memory:')

// Create users table
db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
`)

// Create todos table
db.exec(`
    CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`)

export default db;