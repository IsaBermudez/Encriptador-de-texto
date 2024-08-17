const textArea=document.querySelector(".input");
const mensaje=document.querySelector(".contenido_mensaje");
let caracteres=["Á","É","Í","Ó","Ú","á","é","í","ó","ú","''","!","¡","@","#","$",
    "%","^","&","*","(",")","+","=","{","}","[","]","|","\\",":","'","<",">","?","/","`","~"];

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function validarTexto(texto){
    for(let i=0;i<caracteres.length;i++){
        if(texto.includes(caracteres[i])){
            return false;
        }
    }
    return true;
}
function buscarMayusculas(texto){
    return /[A-Z]/.test(texto);
}
function verificarMensaje(){
    const input_valor=textArea.value;
    if(validarTexto(input_valor)==true && input_valor!="" && !buscarMayusculas(input_valor)){
        botonEncriptar();
    }else{
        alert("Solo letras minusculas y sin acentos ni caracteres especiales");
    }
}
function botonEncriptar(){
    //console.log("Botón encriptar presionado");
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function botonDesencriptar(){
    //console.log("Botón encriptar presionado");
    const textoEncriptado=desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";

    mensaje.style.backgroundImage="none";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function botonCopiar(){
    const texto=mensaje.value;
    navigator.clipboard.writeText(texto).then(()=>{
        console.log("texto copiado al portapapeles");
    }).catch(err=>{
        console.error("Error al copiar el texto: "+err);
    });
}
