let botton1=document.getElementById('sumar'); //Declaración de variable de botón de suma
let botton2=document.getElementById('restar'); //Declaración de variable de botón de resta
let botton3=document.getElementById('multi'); //Declaración de variable de botón de multiplicación
let botton4=document.getElementById('divi'); //Declaración de variable de botón de resta

let respuesta=document.getElementById('respuesta');

botton1.addEventListener('click', hacersuma); //Evento del botón de suma

function hacersuma(){

    let n1=parseFloat(document.getElementById('n1').value); //ParseFloat sirve para hacer el dato flotante y así poder sumar

    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1+n2;

    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

botton2.addEventListener('click', hacerresta); //Evento del botón de resta

function hacerresta(){

    let n1=parseFloat(document.getElementById('n1').value); //ParseFloat sirve para hacer el dato flotante y así poder realizar la operación matemática que se desee

    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1-n2;

    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

botton3.addEventListener('click', hacermulti); //Evento del botón multiplicación

function hacermulti(){

    let n1=parseFloat(document.getElementById('n1').value); 

    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1*n2;

    respuesta.innerHTML=`El resultado de la multiplicación es: ${n3}`;
}


botton4.addEventListener('click', hacerdivi); //Evento del botón división

function hacerdivi(){

    let n1=parseFloat(document.getElementById('n1').value); 

    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1/n2;

    respuesta.innerHTML=`El resultado de la división es: ${n3}`;
}