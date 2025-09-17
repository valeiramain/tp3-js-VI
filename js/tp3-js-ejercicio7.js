// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y 
// mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


const tabla = [0,0,0,0,0,0,0,0,0,0,0]

function tablaMultiplicar(nro){
    for(let i=1; i < 11 ;i++){
        tabla[i] = i * nro;
    }
    return
}

const mostrarTabla = (titulo,nro) => {
    document.writeln(`<h3>${titulo}</h3>`)

    document.writeln(
        `<table class="table table-bordered table-striped text-center p-2">
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>`);

    document.writeln(`<ul>`)
    for (i = 1; i < 11; i++) {
        document.writeln(`<tr>`)
        document.writeln(`<td>${nro} x ${i}</td>`)
        document.writeln(`<td>${tabla[i]}</td>`)
        document.writeln(`</tr>`)
    }
    document.writeln(`
        </tbody>
    </table>`)

    return
}

const numero = parseFloat(prompt('Ingrese un número:'))

if ((!isNaN(numero))&&(numero!==undefined)){
    tablaMultiplicar(numero)

    mostrarTabla(`Tabla de Multiplicar del ${numero}:`,numero)
}else{
    document.writeln(`Operación Inválida`)
}
