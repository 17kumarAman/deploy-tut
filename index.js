const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello from server')
})

app.listen(4000,()=>{
    console.log(`Listening on port 4000`)
})