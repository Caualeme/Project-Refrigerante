let list = document.querySelectorAll('.item')
let after = document.getElementById('next')
let before = document.getElementById('back')

let count = list.length
let active = 0

after.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count-1 ? 0 : active + 1
    list[active].classList.add('active')
    
}

before.onclick = () => {
     let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1 : active - 1
    list[active].classList.add('active')
}