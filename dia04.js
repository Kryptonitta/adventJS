// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100. 
//Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

function createXmasTree(height) {
    //la función recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
    let tree = "";
    //Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
    for (let i = 0; i < height; i++) {
        //i representa la altura del árbol
        let spacesIzq = "";
        let spacesDer = "";
        let asteriscos = "";
        for (let j = 0; j < height - i - 1; j++) {
            //j representa el ancho del árbol. 
            spacesIzq += "_";
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            asteriscos += "*";
        }
        for (let j = 0; j < height - i - 1; j++) {
            spacesDer += "_";
        }
        tree += spacesIzq + asteriscos + spacesDer + "\n";
    }
    // Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #. Uno debajo del otro. Y deben quedar centrados respecto al diseño original.
    // --- TRONCO --- //
    let tronco = "";
    let espacioIzq = "";
    let espacioDer = "";
    let tronquito = "";
    for (let j = 0; j < height -1; j++) {
        espacioIzq += "_";
    }
    for (let j = 0; j < height * 2 + 1; j++) {
        tronquito = "#";
    }
    for (let j = 0; j < height - 1; j++) {
        espacioDer += "_";
    }
    tronco = espacioIzq + tronquito + espacioDer;
    
    return tree + tronco + "\n" + tronco;
}

console.log(createXmasTree(5));

