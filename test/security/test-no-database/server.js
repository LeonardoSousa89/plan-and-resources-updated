import express      from 'express'
import morgan       from 'morgan'
import passport     from 'passport'
import session      from 'express-session'
import auth         from './auth.js'

const port = 3003
const app  = express()
auth(passport)

app.use(session({
    secret:'1234',
    resave:false,
    saveUnitialized: false,
    cookie: { maxAge: 2 * 60 * 1000 }
}))
app.use(passport.initialize())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(port,()=>console.log(`online into port ${port}`))