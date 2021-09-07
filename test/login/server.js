import express from 'express'

const port = 3003
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/auth',(req,res)=>{
    res.sendFile(__dirname + '/logado.html')
})

app.get('/err',(req,res)=>{
    res.sendFile(__dirname + '/assets/404.gif')
})

app.listen(port,()=>console.log(`online into: ${port}`))