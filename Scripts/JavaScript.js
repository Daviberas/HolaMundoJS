//document.getElementById("btnEnviar").addEventListener("click", mostrarDatos());

//alert("Hola mundo");
/*
function hola()
{
    var texto = "Hola mundo";
    document.getElementById("divMensaje").innerHTML = texto;
}
*/

function mostrarDatos()
{
    var res = "";
    var nombre = document.getElementById("txbNombre").value;
    var apellidos = document.getElementById("txbApellidos").value;
    
    if (nombre == "")
    {
        document.getElementById("errorNombre").innerHTML = "Pon un nombre";
    }
    else
    {
        document.getElementById("errorNombre").innerHTML = "";
    }

    if (apellidos == "")
    {
        document.getElementById("errorApellidos").innerHTML = "Pon unos apellidos";
    }
    else
    {
        document.getElementById("errorApellidos").innerHTML = "";
    }
    if (nombre != "" && apellidos != "")
    {
        res = nombre + " " + apellidos;
        document.getElementById("resultado").innerHTML = res;
    }
    
}