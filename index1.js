let a = document.querySelector('#o1')

a.addEventListener('click', jef)

function jef(){
    let no = document.querySelector('#obj1').value
    let aa = document.querySelector('#aa').value
    switch(no){
        case aa:
       alert("Для начало зарегистрируйтесь или войдите")
       return
    }
}