const express = require('express')
const app = express()

app.get('/', (req,res)=> {
   res.send('mostrando data')
})

app.get('/crear', (req,res)=>{
   res.send('creando data')
})