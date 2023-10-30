
var radio = document.querySelector('.manual-btn-fed')
var cont = 1

document.getElementById('radio1-fed').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radiofed'+cont).checked = true
}