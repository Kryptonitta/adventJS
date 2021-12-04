//Consigna:
// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

const letter = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    //Separamos las palabras por espacios
    let gifts = letter.split(' ' || '  ')
    //Creamos un array vacío
    let result = []
    //Recorremos el array y quitamos los _
    gifts.forEach(gift => {
        if (gift[0] == '_') {
            console.log("Queda tachado")
        } else {
            result.push(gift)
        }
    })
    //Creamos un objeto con el nombre del regalo y el número de veces que aparece
    let regalos = {}
    result.forEach(gift => {
        if (regalos[gift]) {
            regalos[gift]++
        } else {
            regalos[gift] = 1
        }
    })
    //Retornamos el objeto
    return regalos

}

console.log(listGifts(letter))