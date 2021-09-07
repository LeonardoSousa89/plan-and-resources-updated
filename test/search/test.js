const doc = document
doc.onload = addEventListener('click',(e)=>e.preventDefault())


function dataTest(){
    let info = doc.querySelector('.info')
    let message = 'hello'
    createData(info,message,'h1')
    createData(info,message,'p')
    createData(info,message,'strong')
    createData(info,message,'h3')
    createData(info,message,'ul')
    createData(info,message,'li')
    createData(info,message,'option')
}
//dataTest()

function data(){
    let search = doc.querySelector('#sc')

    search.addEventListener('change',()=>{
        if(search.value){
            const url = `http://localhost:8081/search?name=${search.value}`
            const config = {
                method: 'GET'
            }
        
            fetch(url, config)
                    .then(data => data.json())
                    .then(data => {
                        data.map(e=>{ 
                            let idBk   = 'ID:'+ e.id + ','
                            let nameBk = 'NAME:'+ e.name + ','

                            searchFunc(idBk,nameBk)                         
                        })
                    })
                    .catch(err => console.log(err))
        }
    })
}
data()


function createData(positioned,element,object){
    let ob = document.createElement(`${object}`)
    ob.append(element)
    positioned.append(ob)
}


function searchFunc(nodeId, nodeName){
    let info = doc.querySelector('.info')
    let search = doc.querySelector('#sc')

    search.addEventListener('keyup',()=>{
        if(search.value == ''){
            info.textContent = ''

            console.log(true,'is empty!')
            console.log(info.textContent = '')
        }else{
            let searched = ''
            let data = [nodeId, nodeName]

            for(let i in data){
                searched += "<ul>" + data[i] + "</ul> "
                info.innerHTML = searched
            }


            console.log(false,'no empty!')
            console.log( info.innerHTML = searched)
        }
    })
}


