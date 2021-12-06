//Consigna:
//Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

let letter= "bici coche () bici coche peluche";
	
function isValid(letter) {
    //Constrolando que tiene los signos "(" y ")", que no esta vacio y que no incluye "{", "}" y "[]"
    if (letter.includes("(") && letter.includes(")") && !letter.includes("{") && !letter.includes("}") && !letter.includes("{") && !letter.includes("[")  && !letter.includes("]")  && !letter.includes("()")) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid(letter))
