import express from 'express'

const port = 8001
const app  = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(port,()=>console.log(`online into port: ${port}`))

//http://localhost:8001
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})