//busca:

    let account = [
    
    {id:0,name:'Mendes',mail:'mendes@gmail.com',pass:1234},
    {id:1,name:'Noah',mail:'noah@outlook.com',pass:1234},
    {id:2,name:'Nikky',mail:'nikky@yahoo.com',pass:1234},
    {id:3,name:'Mohinder',mail:'mohinder@outlook.com',pass:1254},
    {id:4,name:'Micah',mail:'micah@aws.com',pass:1254},
    {id:5,name:'Noah',mail:'noah@outlook.com',pass:1234}
    
]
   



/*função teste 1*/
function search(element){
     return account.find(e => e.name === element)
}

console.log(search('Mendes'))




/*função teste 2*/
function search(element){
     return account.find(e => e.name === element)
}

console.log(search('Micah'))




/*função teste 3*/
function search(element){
     return account.find(e => {
        if( e.name === element){
            console.log(e)    
        }else{
            console.log('')
        }
        
     })
}

search('Noah')




/*função teste 4*/
function search(id){
    return account.find(e => {
        if(id === e.id){
            console.log(e)
        }
    })
}

search(3)




/*função teste 5*/
function auth(name, password){
     let user = account.find(e => {
        if(name === e.name){
             if(password === e.pass){
                 console.log('logged with sucessfully')
             }else{
                 console.log(" ' ;( i'm sorry an error ocurred!  '  ")
             }
        }
    })
    
    
}


auth('Mendes',1234)



/*função teste 6*/
function _search(ar,name){
    return ar.find(e =>{
        if(name === e.name) return e
    })
}

console.log(_search(account,'Nikky'))




/*função teste 7*/
function _login(ar,name,password){
    return ar.find(e =>{
        if(name === e.name && password === e.pass) console.log('User login with success!') 
        else console.log('')
    })
}

_login(account,'Mendes',1234)
_login(account,'Mendes',124)
_login(account,'',124)
_login(account,'Mohinder',1254)
_login(account,'Noah',1234)




/*

links:

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

*/