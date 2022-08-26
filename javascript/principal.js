var nombreInput;
var ApellidoInput;
var matriculaInput;
var telefonoInput;
var correoInput;
var cursoInput;
var enviar;
var datos;
var ajax;

function inicializar() {
    nombreInput=document.querySelector('#nombre');
    ApellidoInput=document.querySelector('#apellido');
    matriculaInput=document.querySelector('#matricula');
    telefonoInput=document.querySelector('#telefono');
    correoInput=document.querySelector('#correo');
    cursoInput=document.querySelector('#curso');
    enviarBtn=document.querySelector('#enviar');
    datos=new FormData();
    ajax=new XMLHttpRequest();
    
    enviarBtn.addEventListener('click',enviar,false);
}

function enviar() {
    prepararDatosAEnviar();
    ajax.open('POST','http://localhost/InscripcionCursosOnline/php/recibirDatosSeccionPrincipal.php',true);
    ajax.send(datos);
    window.open('tanda.html','_self');
} 

function prepararDatosAEnviar() {
    datos.append('apellido',ApellidoInput.value);
    datos.append('nombre',nombreInput.value);
    datos.append('matricula',matriculaInput.value);
    datos.append('telefono',telefonoInput.value);
    datos.append('correo',correoInput.value);
    datos.append('curso',cursoInput.value);
}
window.addEventListener('load',inicializar,false);

