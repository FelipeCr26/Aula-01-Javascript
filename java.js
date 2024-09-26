const divRoot = document.getElementById("root")
 
 
const valor3 = parseFloat(prompt("informe um valor"))
const valor4 = parseFloat(prompt("informe outro valor"))
 
const soma = valor3 + valor4
const subtracao = valor3 - valor4
const multiplicacao = valor3 * valor4
const divisao = valor3 / valor4
const resto = valor3 % valor4
 
console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)
 
 
//calculo de somas
const resultadoSoma = document.createElement("span")
resultadoSoma.textContent = valor3 + " + " + valor4 + " = " + soma
 
 
//calculo de subtração
const resultadoSubtracao = document.createElement("span")
resultadoSubtracao.textContent = valor3 + " - " + valor4 + " = " + subtracao
 
//calculo de multiplicação
const resultadoMultiplicacao = document.createElement("span")
resultadoMultiplicacao.textContent = `${valor3} * ${valor4} = ${multiplicacao}`
 
//calculo de divisão
 
const resultadoDivisao = document.createElement("span")
resultadoDivisao.textContent = `${valor3} / ${valor4} = ${divisao}`
 
//calculo de resto (?)
 
const resultadoResto = document.createElement("span")
resultadoResto.textContent = valor3 + " % " + valor4 + " = " + resto
 
//imprimir resultado no html
divRoot.appendChild(resultadoSoma)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoSubtracao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoMultiplicacao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoDivisao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoResto)