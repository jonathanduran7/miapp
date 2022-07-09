const {Router} = require('express')
const app = Router()

app.get('/', (req,res)=> {
   res.send('esto es el endpoint basico')
})

app.get('/crear', (req,res)=>{
   res.send('creando tarea')
})

module.exports = app