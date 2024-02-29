const campoIngresarTexto = document.querySelector("#ingresar-texto");
const campoEncriptarTexto = document.querySelector("#campo-encriptado");



const matrizCode = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    const texto = encriptar(campoIngresarTexto.value);
    campoEncriptarTexto.value = texto;
}

function encriptar(fraseEncriptada) {
    for(let i = 0; i < matrizCode.length; i++) {
        if(fraseEncriptada.includes(matrizCode[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll (
                matrizCode [i][0],
                matrizCode [i][1]
            )
        }
    }
    return fraseEncriptada;
}

