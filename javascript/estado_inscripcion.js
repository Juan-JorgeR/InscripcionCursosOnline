var datos;
var ajax;
var nombre,apellido,matricula,telefono,correo,curso,tanda;

function datosEstudiante() {
    var estudiante=document.getElementById('estudiante');
    var matricula=document.getElementById('matricula_est_insc');
    var correo=document.getElementById('correo_est_insc');
    estudiante.innerHTML=this.nombre+' '+this.apellido;
    matricula.innerHTML=this.matricula;
    correo.innerHTML=this.correo;
}
function crearTabla() {
    var contenedor_tabla=document.querySelector('#estado_inscripcion');
    var lugar,horario,date,fecha;
    date=new Date();
    fecha=String(date.getDate()).padStart(2,'0')+'/'+String(date.getMonth()+1).padStart(2,'0')+'/'+date.getFullYear();

    if(curso=='Mysql')
        lugar='EH 210';
    else if(curso=='Java Programming')
        lugar='EH 201';
    else if(curso=='JavaScript')
        lugar='EH 209';
    
    if(tanda=='matutino')
        horario='Lun-Vie 08:00 am - 12:00 pm';
    else if(tanda=='vespertino')
        horario='Lun-Vie 01:00 pm - 05:00 pm';
    else if(tanda=='nocturno')
        horario='Lun-Vie 05:00 pm - 09:00 pm';

    var tabla=document.createElement('table');
    var fila;
    var celda;
    
    fila=document.createElement('tr');
    fila.setAttribute('id','campos');

    celda=document.createElement('td');
    celda.appendChild(document.createTextNode('Fecha de inscripción'));
    fila.appendChild(celda);
    
    celda=document.createElement('td');
    celda.appendChild(document.createTextNode('Curso'));
    fila.appendChild(celda);

    celda=document.createElement('td');
    celda.appendChild(document.createTextNode('Lugar'));
    fila.appendChild(celda);

    celda=document.createElement('td');
    celda.appendChild(document.createTextNode('Horario'));
    fila.appendChild(celda);

    tabla.appendChild(fila);

    fila=document.createElement('tr');
    fila.setAttribute('id','registros');

    celda=document.createElement('td');
    celda.appendChild(document.createTextNode(fecha));
    fila.appendChild(celda);
    
    celda=document.createElement('td');
    celda.appendChild(document.createTextNode(curso));
    fila.appendChild(celda);

    celda=document.createElement('td');
    celda.appendChild(document.createTextNode(lugar));
    fila.appendChild(celda);

    celda=document.createElement('td');
    celda.appendChild(document.createTextNode(horario));
    fila.appendChild(celda);

    tabla.setAttribute('id','tabla');
    tabla.appendChild(fila);

    contenedor_tabla.appendChild(tabla);
}
function  obtenerDatosDelServidor(e) {
    var xml=e.target.responseXML;
    nombre=xml.getElementsByTagName('nombre')[0].firstChild.nodeValue;
    apellido=xml.getElementsByTagName('apellido')[0].firstChild.nodeValue;
    matricula=xml.getElementsByTagName('matricula')[0].firstChild.nodeValue;
    telefono=xml.getElementsByTagName('telefono')[0].firstChild.nodeValue;
    correo=xml.getElementsByTagName('correo')[0].firstChild.nodeValue;
    tanda=xml.getElementsByTagName('tanda')[0].firstChild.nodeValue;
    curso=xml.getElementsByTagName('curso')[0].firstChild.nodeValue;

    datosEstudiante();
    crearTabla();
}

function inicializar() { 
    datos=new FormData();
    ajax=new XMLHttpRequest();
    ajax.addEventListener('load',obtenerDatosDelServidor,false);
    ajax.open('get','http://localhost/InscripcionCursosOnline/php/estado_inscripcion.php');
    ajax.send(null);
}

window.addEventListener('load',inicializar,false);