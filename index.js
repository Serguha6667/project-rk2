let a = document.querySelector('#btn-1')
let b = document.querySelector('#btn-1')
let c = document.querySelector('#number')

a.addEventListener('click', ssan)

function ssan(){
    let secondname = document.querySelector('#name1').value
    let username = document.querySelector('#name').value
    let user = document.querySelector('#number').value
    
    if(username.length <  3) {
        alert("Имя должно иметь не меньше 3 символов")
        return
    }
    if(secondname.length <  3) {
        alert("фамилия должна иметь не меньше 3 символов")
        return
    }
    if (user <= 15 || user > 30){
        alert("Недопустимый возраст")
        return
        }
    window.location.href = 'http://127.0.0.1:5502/index.html' 
}