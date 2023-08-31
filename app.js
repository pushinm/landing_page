let form = document.forms.myForm
let number_check = /^\+998\d{9}$/
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formdata = new FormData(form)
    let name = formdata.get('name_of_client')
    let number = formdata.get('number')
    if (!number_check.test(number)) {
        alert('Введите номер правильно!')
    }else{
        const data = {
            'name': name,
            'number': number
        }
        console.log(data);
    }
})

let burger_menu = document.images.burger
burger_menu.addEventListener('click', (e) => {
    let menu = document.querySelector('.hidden-ul')
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }else{
        menu.classList.add('active')
    }
/*     document.querySelector('.hidden-ul').classList.add('active') */
})

let scroll_button = document.querySelector('.zay')
scroll_button.addEventListener('click', e =>{
    form.scrollIntoView({
        behavior: 'smooth'
    })
})