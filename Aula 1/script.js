//variaveis
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
let formulario = document.getElementById("formulario")

//botoes
const botaoSomar = document.getElementById("botao+")
const botaoSubtrair = document.getElementById("botao-")
const botaoMultiplicar = document.getElementById("botao*")
const botaoDividir = document.getElementById("botao/")

//funcoes
function somar() {
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
    formulario.classList.add("red")

    formulario.classList.remove("blue")
    formulario.classList.remove("yellow")
    formulario.classList.remove("green")
}
function subtrair() {
    resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
    formulario.classList.add("blue")
    
    formulario.classList.remove("red")
    formulario.classList.remove("yellow")
    formulario.classList.remove("green")
}
function multiplicar() {
    resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
    formulario.classList.add("yellow")

    formulario.classList.remove("blue")
    formulario.classList.remove("red")
    formulario.classList.remove("green")
}
function dividir() {
    resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
    formulario.classList.add("green")

    formulario.classList.remove("blue")
    formulario.classList.remove("yellow")
    formulario.classList.remove("red")
}

//adicionandoEventoAoBotao
botaoSomar.addEventListener("click", somar)
botaoSubtrair.addEventListener("click", subtrair)
botaoMultiplicar.addEventListener("click", multiplicar)
botaoDividir.addEventListener("click", dividir)


