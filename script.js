let button1 = document.querySelector('.button1')
let button2= document.querySelector('.button2')
let button3= document.querySelector('.button3')
let button4= document.querySelector('.button4')
let button5= document.querySelector('.button5')
let button6= document.querySelector('.button6')
let button7= document.querySelector('.button7')
let button8= document.querySelector('.button8')
let button9= document.querySelector('.button9')
let button0= document.querySelector('.button0')
let c= document.querySelector('.brisi')
let brisanje= document.querySelector('.brisijednopojedno')
let deljenje= document.querySelector('.deljenje')
let mnozenje= document.querySelector('.mnozenje')
let sabiranje= document.querySelector('.sabiranje')
let oduzimanje= document.querySelector('.oduzimanje')
let jednako= document.querySelector('.jendako')


let inputbox = document.querySelector('.prikaz')
function DodajBroj(n) {
    inputbox.value += n
}
function ObrisiSve() {
    inputbox.value = ''
}
function izracunaj() {
    let x = inputbox.value
    y = eval(x)
    inputbox.value = y
}

button1.addEventListener('click', function() {
    DodajBroj(1)
})
button2.addEventListener('click', function() {
    DodajBroj(2)
})
button3.addEventListener('click', function() {
    DodajBroj(3)
})
button4.addEventListener('click', function() {
    DodajBroj(4)
})
button5.addEventListener('click', function() {
    DodajBroj(5)
})
button6.addEventListener('click', function() {
    DodajBroj(6)
})
button7.addEventListener('click', function() {
    DodajBroj(7)
})
button8.addEventListener('click', function() {
    DodajBroj(8)
})
button9.addEventListener('click', function() {
    DodajBroj(9)
})
button0.addEventListener('click', function() {
    DodajBroj(0)
})


deljenje.addEventListener('click', function() {
    DodajBroj('/')
})
mnozenje.addEventListener('click', function() {
    DodajBroj('*')
})
sabiranje.addEventListener('click', function() {
    DodajBroj('+')
})
oduzimanje.addEventListener('click', function() {
    DodajBroj('-')
})
jednako.addEventListener('click', function() {
    izracunaj()
})






c.addEventListener('click', function() {
    ObrisiSve()
})