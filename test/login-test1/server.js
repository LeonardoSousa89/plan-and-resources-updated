import express  from 'express'
import log      from 'morgan'
import cors     from 'cors'

function block(req,res){
    if(req.statusCode === '200') return res.redirect('/')
    return res.redirect('/login')
}

const port = 3003
const app  = express()
app.use(log('dev'))
app.use(cors({ origin:'*' }))

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/',block,(req,res)=>{
    res.sendFile(__dirname + '/app.html')
})


app.listen(port,()=>console.log(`online into port:${port}`))
