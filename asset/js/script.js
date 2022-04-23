var nombre_usuario = prompt("ingrese su nombre")
var usuario_id = document.getElementById("usuario")
usuario_id.innerHTML = nombre_usuario

$(function(){
   $(".parrafo").hide()
   $(".boton-1").click(function(event){
       event.preventDefault()
       $(".parrafo-1").toggle(500)
   })
   $(".boton-2").click(function(event){
    event.preventDefault()
    $(".parrafo-2").toggle(500)
    }) 
$(".boton-3").click(function(event){
    event.preventDefault()
    $(".parrafo-3").toggle(500)
    })  
})
$(".boton-4").click(function(){
    alert("Solicitud enviada")
})