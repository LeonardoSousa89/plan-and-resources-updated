import express from 'express'

const port = 3003
const app  = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/cadastro',(req,res)=>{
    res.sendFile(__dirname + '/cadastro.html')
})

app.listen(port,()=>console.log(`online into port: ${port}`))