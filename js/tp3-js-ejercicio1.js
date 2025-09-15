//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//  Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

document.writeln(`<h4 class="my-3">Lista de Meses 🗓️</h4>`)
document.writeln(`<ul class="list-group">`)
for (let i = 0; i < meses.length; i++) {
    document.writeln(`<li class="list-group-item">${meses[i]}</li>`)
}
document.writeln(`</ul>`)
