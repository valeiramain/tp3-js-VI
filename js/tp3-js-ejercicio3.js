//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const apariciones = new Array(13).fill(0)

for (let i = 1; i <= 50; i++) {
    const dado1 = Math.floor(Math.random() * 6 + 1);
    const dado2 = Math.floor(Math.random() * 6 + 1);
    // const dado2 = Math.floor(Math.random() * (6 - 1) + 1)
    sumaDados = dado1 + dado2
    
    // Registrar aparición
    apariciones[sumaDados]++;

}

// Mostrar resultados

document.writeln(`<table class="table table-striped table-hover">
        <thead>
            <tr class="text-center">
                <th scope="col">Suma 🎲🎲</th>
                <th scope="col">Apariciones</th>
            </tr>
        </thead>
        <tbody>`)

for (let i = 2; i <= 12; i++) {
    document.writeln(`<tr class="text-center">
        <td>${i}</td>
        <td>${apariciones[i]}</td>
    </tr>`)
}

document.writeln(`</tbody>
    </table>`)




