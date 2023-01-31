function CambiarVisDatosPers (datos ,direccion ,contacto)
{
document.getElementById('datos').style.visibility='visible';
document.getElementById('direccion').style.visibility='hidden';
document.getElementById('contacto').style.visibility='hidden';
}

function CambiarVisDir (datos ,direccion ,contacto)
{
document.getElementById('datos').style.visibility='hidden';
document.getElementById('direccion').style.visibility='visible';
document.getElementById('contacto').style.visibility='hidden';
}

function CambiarVisContacto (datos ,direccion ,contacto)
{
document.getElementById('datos').style.visibility='hidden';
document.getElementById('direccion').style.visibility='hidden';
document.getElementById('contacto').style.visibility='visible';
}