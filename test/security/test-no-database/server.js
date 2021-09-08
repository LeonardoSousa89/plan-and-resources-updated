import express      from 'express'
import morgan       from 'morgan'
import passport     from 'passport'
import session      from 'express-session'
import auth         from './auth.js'


const port = 3003
const app  = express()
auth(passport)

function authenticationMiddleware(req,res,next){
    if(req.isAuthenticated()) return next()
    res.redirect('/login')
}

app.use(morgan('dev'))
app.use(session({
    secret:'1234',
    resave:false,
    saveUnitialized: false,
    cookie: { maxAge: 2 * 60 * 1000 }
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/',authenticationMiddleware,(req,res)=>{
     res.sendFile(__dirname + '/login.html')
})

app.get('/err',authenticationMiddleware,(req,res)=>{
    res.sendFile(__dirname + '/assets/404.gif')
})

app.post('/', authenticationMiddleware,passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect: '/err?failure=true'
}))



app.listen(port,()=>console.log(`online into port ${port}`))