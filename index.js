function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let figura = document.getElementById("figura"); 
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con exito";
            parrafo.textContent = "";
            document.getElementById("figura").src = "./img/encriptado.png";
    } else {
        figura.src = "./img/figura.svg";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa en texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algun texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let figura = document.getElementById("figura"); 
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        document.getElementById("figura").src = "./img/Desencriptado.png";
    } else {
        figura.src = "./img/figura.svg";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa en texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algun texto");
    }
}

