var ajax;
var datos;
var tanda;
var inscribirBtn;

function inicializar() {
    ajax=new XMLHttpRequest();
    inscribirBtn=document.querySelector('#inscribir');
    inscribirBtn.addEventListener('click',inscribir,false);
    //datos.append('tanda',tanda.);
}
function inscribir() {
    datos=new FormData();
    var tandas=document.querySelectorAll('.opcion');
    tandas.forEach(element => {
        if(element.checked)
            tanda=element.value;
    });
    datos.append('tanda',tanda);
    ajax.addEventListener('load',()=>{console.log(ajax.responseText);},false);
    ajax.open('post','http://localhost/InscripcionCursosOnline/php/recibirDatosSeccionTanda.php',true);
    ajax.send(datos);
    window.open('estado_inscripcion.html','_self');
}
window.addEventListener('load',inicializar,false);