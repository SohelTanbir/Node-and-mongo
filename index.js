const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Welcome to Full-Stack Development')
})

app.listen(3000, ()=> console.log('listening to post 3000'))