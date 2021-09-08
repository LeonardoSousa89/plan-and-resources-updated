import express  from 'express'
import log      from 'morgan'
import cors     from 'cors'

const port = 3003
const app  = express()
app.use(log('dev'))
app.use(cors({ origin:'*' }))

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/app.html')
})


app.listen(port,()=>console.log(`online into port:${port}`))
