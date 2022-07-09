const express = require('express')
const app = express()

app.get('/', (req,res)=> {
   res.send('mostrando data desde node')
})

app.get('/crear', (req,res)=>{
   res.send('creando data')
})

app.listen(3000,()=>{
   console.log('server in port',3000)
})