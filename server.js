const express = require('express')
const app = express()
app.use(express.json())

const Port = 8000

const users = [
    {name: "avi", age: 69, email: "avi@mail.com"},
    {name: "dada", age: 100, email: "dada@mail.com"},
    {name: "papa", age: 99, email: "papa@mail.com"}
]

app.get('/', (req, res) => {
    res.send(`Hello user`)
})

app.get('/user', (req, res) => {
        const {user} = req.query;

        if (!user){
            return res.status(400).json({message: `User parameter cannot be empty`})
        }

        const foundUser = users.find(u => u.name.toLowerCase() === user.toLowerCase())
        
        if (foundUser){
            return res.json({message: "User found", user: foundUser})
        }else{
            res.status(404).json({message: `User not found`})
        }
})


app.listen(Port, () => {
    console.log(`App is runnning on the server http://localhost:${Port}`)
})