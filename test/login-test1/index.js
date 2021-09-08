import express from 'express'
import log     from 'morgan'
import cors    from 'cors'
import  db     from './data.json' 

const port      = 3004
const app       = express()
app.use(log('dev'))
app.use(cors({ origin:'*' }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/',(req,res,next)=>{
    
    try{
        
       const { user, pass } = req.body

       let login = {
            user,
            pass
       }

        let data = {
            userdb: 'mendes',
            passdb: '1234'
        }
        

        if(     !login.user         || !login.pass 
                || 
                login.user === ''   || login.pass === ''
                ||
                login.user === null || login.pass === null ){
                    res.status(404)
                       .json({msg:'User not found!'})
                    console.log(login.user)
                    console.log(login.pass)
        }else if(login.user != data.userdb
                &&
                login.pass  != data.passdb){
                     res.status(401)
                        .json({msg:'Unauthorized!'})
                    console.log(login.user)
                    console.log(login.pass)
        }else if(login.user === data.userdb
                &&
                login.pass  === data.passdb){
                     res.redirect(200,'http://localhost:3003/')
                       
        }

    }catch(err){
        res.redirect('http://localhost:3003/login')
    }

})

app.listen(port,()=>console.log(`online into port:${port}`))