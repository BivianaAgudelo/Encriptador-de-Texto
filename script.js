const campoIngresarTexto = document.querySelector(".text-area");
const campoEncriptarTexto = document.querySelector(".mensaje");

/** Ocultar imagen textarea robot */
var contenedorEncriptador = document.querySelector(".img-robot-encriptador");
var imagenEncriptador = contenedorEncriptador.querySelector("img");

/** Ocultar mensaje "Ningún mensaje fue
    encontrado
    Ingresa el texto que desees encriptar o desencriptar" 
*/

var mensajeNoEncontrado = document.querySelector(".mensaje-no-encontrado");

const matrizCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncriptar() {
  const texto = encriptar(campoIngresarTexto.value);
  campoEncriptarTexto.value = texto;
  campoIngresarTexto.value = "";
  imagenEncriptador.style.display = "none";
  mensajeNoEncontrado.style.display = "none";
}

function encriptar(fraseEncriptada) {
  fraseEncriptada = fraseEncriptada.toLowerCase();
  for (let i = 0; i < matrizCode.length; i++) {
    if (fraseEncriptada.includes(matrizCode[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }
  return fraseEncriptada;
}

function btnDesencriptar() {
  const texto = desencriptar(campoIngresarTexto.value);
  campoEncriptarTexto.value = texto;
  campoIngresarTexto.value = "";
}

function desencriptar(fraseDesencriptada) {
  fraseDesencriptada = fraseDesencriptada.toLowerCase();
  for (let i = 0; i < matrizCode.length; i++) {
    if (fraseDesencriptada.includes(matrizCode[i][1])) {
      fraseDesencriptada = fraseDesencriptada.replaceAll(
        matrizCode[i][1],
        matrizCode[i][0]
      );
    }
  }
  return fraseDesencriptada;
}
