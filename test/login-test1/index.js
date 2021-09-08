import express from 'express'
import log     from 'morgan'
import cors    from 'cors'

const port = 3004
const app  = express()
app.use(log('dev'))
app.use(cors({ origin:'*' }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let userdb = 'mendes'
let passdb = '1234'


app.post('/',(req,res,next)=>{
    
    let login = {
        user : req.body.user,
        pass : req.body.pass
    }

    if(login.user != userdb && login.pass != passdb) return res.redirect('http://localhost:3003/login')    

    else next()
})

app.get('/',(req,res)=>{
    res.redirect('http://localhost:3003/')    
})

app.listen(port,()=>console.log(`online into port:${port}`))