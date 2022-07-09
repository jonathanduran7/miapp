const {Router} = require('express')
const app = Router()

app.get('/', (req,res)=> {
   res.send('en router')
})

app.get('/crear', (req,res)=>{
   res.send('crear desde router')
})

module.exports = app