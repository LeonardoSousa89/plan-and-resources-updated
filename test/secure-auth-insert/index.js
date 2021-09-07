import log     from 'morgan'
import express from 'express'
import cryptr  from 'cryptr'
import knex    from 'knex'
import cors    from 'cors'

/** initial config */
const db = knex({
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      database: 'auth',
      user:     'root',
      password: ''
    }, 
    pool: {
      min: 2,
      max: 10
    }
})
const port   = 8003
const secure = new cryptr('as256') 
const app    = express()

app.use(log('dev'))
app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(port,()=>console.log(`online into port: ${port}`))

/* endpoints */

//http://localhost:8003
app.get('/', async(req,res)=>{
    await db.select('*').table('login')
            .then(data => {
                res.status(200).json(data)
            }).catch(err => {
                res.status(200).json(err)})
})

//http://localhost:8003
app.post('/', async(req,res)=>{
    let pass        = req.body.pass
    let passSec     = secure.encrypt(pass)
    pass            = passSec
    
    const login = {
        user: req.body.user,
        pass
    } 

    await db.insert(login).table('login')
            .then(user => {
                  res.status(201).json(user)
            }).catch(err => {
                     res.status(201).json(err)})
})
