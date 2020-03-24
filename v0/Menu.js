var btn = document.querySelector('#Menu_btn')
var nav = document.querySelector('.Nav')

btn.onclick = function () {
    nav.classList.toggle('Nav_open')
}