const start_btn = document.querySelector('#start_btn')
const screens = document.querySelector('.screen')
const body = document.querySelector('body')

start_btn.addEventListener('click', (event) => {
    screens.classList.add('down')
    scroll(body)
})

function scroll(element) {
    element.style.overflow = `scroll`
}

window.onload = function () {
    window.location.hash = "start"
    document.querySelector('body').style.overflow = "hidden"
}
