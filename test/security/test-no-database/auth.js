import bcrypt from 'bcrypt'
bcrypt.hashSync()

const users = [{
    _id: 1,
    username: 'adm',
    password: 'gUuFwNo4zkMV+erdGtBlf5NunNgcELQuiCFJmCU4F+E=',
    email:    'user@gmail.com'
}]

export default function User(passport){
    function findUser(userName){
        return users.find(item => item.username === username)
    }

    function findUserById(id){
        return users.find(item => item.id === id)
    }

    passport.serializeUser((user, done)=>{
        done(err, user._id)
    })
}