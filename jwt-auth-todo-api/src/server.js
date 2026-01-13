// Import Express to create and run the backend server
import express from 'express'
import path, { dirname } from 'path' // Import path utilities to safely work with file and folder paths // dirname helps us get the folder name from a file path
import { fileURLToPath } from 'url'  // Used to convert ES module URL into a normal file system path
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'


// Create an Express application (this is our server)
const app = express()

// Decide the port number for the server
// Use PORT from environment variables if available, otherwise use 1992
const PORT = process.env.PORT || 1992
// Server will run at: http://localhost:1992

//Middleware 
app.use(express.json())

// Get the full file path of the current file (server.js)
const __filename = fileURLToPath(import.meta.url)

// Get the directory path where server.js is located
const __dirname = dirname(__filename)


// Serve static files (HTML, CSS, JS, images) from the public folder
// ../public means: go one level up from src and then into public
app.use(express.static(path.join(__dirname, '../public')))


// Handle GET request for the home route '/'
app.get('/', (req, res) => {

    // Send index.html file from the public folder to the browser
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

// Routes
app.use('/auth',authRoutes)
app.use('/todos',authMiddleware,todoRoutes)



// Start the server and listen for incoming requests
// This should always be at the bottom of the file
app.listen(PORT, () => {

    // Log a message to confirm the server has started
    console.log(`server has started on ${PORT}`)
})
