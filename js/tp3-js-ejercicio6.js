// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

function perimetro(a,b){
    document.writeln(`El perímetro es igual a ${2 * (a+b)}`) 
}

const lado1 = parseFloat(prompt('Ingrese valor del lado 1:'))
const lado2 = parseFloat(prompt('Ingrese valor del lado 2:'))

if (!isNaN(lado1) && !isNaN(lado2)){
    perimetro(lado1,lado2)
}else{
    document.writeln('Debe ingresar valores numericos')
}