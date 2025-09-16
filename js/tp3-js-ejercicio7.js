// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultiplicar(numero){
    document.writeln(`<h4 class="my-3">Tabla de Multiplicar por ${numero}</h4>`)
    for(let i=0; i<=12; i++){
        document.writeln(`<p>${numero} X ${i} = ${numero*i}</p>`)
    }
}

const numeroTabla = parseInt(prompt('Ingrese un número para la tabla de multiplicar: '))

if(!isNaN(numeroTabla)){
    tablaMultiplicar(numeroTabla)
}else{
    document.writeln(`<p>Debe ingresar un número</p>`)
}
