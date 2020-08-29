let n1 = 0
let n2 = 0

function leerDatos() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)
}

let resultado = document.getElementById('resp')

function operacion(operador) {

    switch (operador) {
        case "suma":
            leerDatos()
            resultado.innerText = n1 + n2
            console.log(n1, n2, resultado)
            break;
        case "resta":
            leerDatos()
            resultado.innerText = n1 - n2
            console.log(n1, n2, resultado)
            break;
        case "multiplicaion":
            leerDatos()
            resultado.innerText = n1 * n2
            console.log(n1, n2, resultado)
            break;
        case "divicion":
            leerDatos()
            resultado.innerText = n1 / n2
            console.log(n1, n2, resultado)
            break;
        default:
            console.log("No es una operacion activa")
            break;
    }

}
