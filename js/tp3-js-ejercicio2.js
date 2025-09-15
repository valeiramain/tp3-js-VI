//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const ciudades = []
do {
    const ciudad = prompt('Ingrese el nombre de una ciudad: ')
    ciudades.push(ciudad)
}
while (confirm('Desea ingresar otra Ciudad?'))

//Mostrar la longitud del arreglo.
document.writeln(`<p class="my-3">El arreglo de ciudades tiene elementos ${ciudades.length}</p>`)

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.writeln(`<ul class="list-group">`)
    document.writeln(`<li class="list-group-item"> Elemento 1era posición: ${ciudades[0]}</li>`)
    document.writeln(`<li class="list-group-item"> Elemento 3era posición: ${ciudades[2]}</li>`)
    document.writeln(`<li class="list-group-item"> Elemento Ultima posición: ${ciudades[ciudades.length - 1]}</li>`)
document.writeln(`</ul>`)

//Añade en última posición la ciudad de París
ciudades.push('París')

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.writeln(`<p>El elemento que ocupa la segunda posición es: ${ciudades[1]}</p>`)

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = 'Barcelona'

//Mostrar resultados
document.writeln(`<h3 class="my-3">Arreglo de Ciudades</h3>`)
document.writeln(`<ul class="list-group">`)
for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li class="list-group-item">Elemento: ${ciudades[i]}</li>`)
}
document.writeln(`</ul>`)
