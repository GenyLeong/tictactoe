$(function (){

var contador=0;
var array = new Array(10);

$(document).on("click", ".casillero", function(){
contador++;

if (contador%2 ==0){
	array.push($(this).html('x'));
}

else{
	array.push($(this).html('o'));
    
}

comparar();

});


});


function comparar(){

if (array[0] && array[1] && array[2] == "x"){
	alert("gano jugador 1")
}

}