//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mayusculaOMinuscula(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.writeln(`<p>La cadena: "${cadena}" está formada solo por MAYÚSCULAS.</p>`);
    } else if (cadena === cadena.toLowerCase()) {
        document.writeln(`<p>La cadena: "${cadena}" está formada solo por minúsculas.</p>`);
    } else {
        document.writeln(`<p>La cadena: "${cadena}" contiene una mezcla de MAYÚSCULAS y minúsculas.</p>`);
    }
}


const texto = prompt('Ingrese un cadena de texto:')

mayusculaOMinuscula(texto)
