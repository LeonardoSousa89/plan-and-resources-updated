const port     = 8081
const cors     = require('cors')
const express  = require('express')
const app      = express()
const db       = require('knex')({

    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      database: 'demo_data_test',
      user:     'root',
      password: ''
    }, 
    pool: {
      min: 2,
      max: 10
    }

})


app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port,()=> console.log(`online in ${port}`) )


//http://localhost:8081/
app.get('/', async(req,res)=>{
    await db.select('*')
      .table('data')
      .then(data => {
          res.status(200).json(data)
      })
      .catch(err =>{
        res.status(500).json(err)
      })
})


//http://localhost:8081/search?name=name_searched
app.get('/search?', async(req,res)=>{
   await db.where({  name: req.query.name })
      .select('*')
      .table('data')
      .then(data => {
          res.status(200).json(data)
      })
      .catch(err =>{
        res.status(500).json(err)
      })
})
