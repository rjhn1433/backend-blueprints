//address to this server connected to the network is: 
// http://localhost:3308
// IP 127.0.0.1:3308
const express = require('express')
const app = express()
const PORT = 3308;

let data = ['raj']

// Middleware 
app.use(express.json())


 
// ENDPOINTS - http VERBS ( METHODS ) & Routes'/' (paths)
// the methods tells about the type/nature of request. and path is subdirectory (basically we direct tge request to the
//body of code to respond appropriately, and these location or paths are known as endpoints)

//  TYPE 1 website endpoiny
app.get('/', (req, res) => { 
    res.send(`
        <body style = "background: grey; color: white;">
        <h1> Data: </h1>
        <p>${JSON.stringify(data)}</p>
        <a href = '/Dashboard' style = "color : white;"> Dashboard </a></body>
        `)
        
})
app.get('/dashboard', (req, res) => {
    res.send(`
        <body style = "background: grey; color: white;">
        <h1>Dashboard</h1>
        <a href ='/' style = "color : white;"> Home </a>
        </body>
        `)
})

// TYPE 2 API endpoint
 
// CRUD (METHOD) -> Create (POST), Read (GET), Update (PUT), Delete (DELETE)
app.get('/api/data', (req, res) => {
    res.send(data)
})

// for creating or POST request
app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})


// for DELETING any user

app.delete('/api/data', (req,res) => {
    data.pop()
    console.log("we deleted the element at teh end of the array")
    res.sendStatus(204)
})

app.listen(PORT , () => console.log(`server has started on : ${PORT}`))