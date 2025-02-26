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
 dalisamkliknojednako = false
function izracunaj() {
    let x = inputbox.value
    y = eval(x)
    inputbox.value ='Answer: '+ y
    dalisamkliknojednako = true
   
}

button1.addEventListener('click', function() {
    if(dalisamkliknojednako) {
         inputbox.value = ''
         dalisamkliknojednako = false
    }
    DodajBroj(1)
})
button2.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }
   DodajBroj(2)
})
button3.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(3)
})
button4.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(4)
})
button5.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(5)
})
button6.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(6)
})
button7.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(7)
})
button8.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(8)
})
button9.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(9)
})
button0.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj(0)
})


deljenje.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj('/')
})
mnozenje.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj('*')
})
sabiranje.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj('+')
})
oduzimanje.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    DodajBroj('-')
})
jednako.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }

    izracunaj()
})






c.addEventListener('click', function() {
    ObrisiSve()
})

brisanje.addEventListener('click', function() {
    if(dalisamkliknojednako) {
        inputbox.value = ''
        dalisamkliknojednako = false
   }
    let string = inputbox.value
    obrisani = string.substring(0,string.length-1)
    inputbox.value = obrisani
})

inputbox.addEventListener('keydown', function(e) {
    e.preventDefault()
    return false
})