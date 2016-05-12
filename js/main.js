$(function (){

var contador=0;
var array = new Array(9);

$('#board').find('td').on("click", function(){
contador++;

if (contador%2 ==0){
	$(this).html('x');
	comparar('x');
	$(this).attr('disabled', true);
		
}

else{
	$(this).html('o');
	comparar('o');
	$(this).attr('disabled', true);

}

comparar();

});


});

function comparar(jugador){

if ($('#board').find('#1').text() !== '+'){
            if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
                if ($('#board').find('#1').text() == $('#3').text()) {
                    alert('Win ' + jugador);
                    $('td').attr('disabled', true);

               }
            }
        //left column check
            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if ($('#board').find('#1').text() == $('#7').text()) {
                    alert('win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }
        //left diagonal check
            if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#1').text() == $('#9').text()) {
                    alert('Win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }    
        }
        
       //middle column check
        if ($('#board').find('#2').text() !== '+'){
            if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#2').text() == $('#8').text()) {
                    alert('win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }
        }
        
        //right column check
        if ($('#board').find('#3').text() !== '+'){
            if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
                if ($('#board').find('#3').text() == $('#9').text()) {
                    alert('win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }
            //right diag check
            if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#3').text() == $('#7').text()) {
                    alert('win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }
        }
        
        //middle row check
        
        if ($('#board').find('#4').text() !== '+'){
            if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#4').text() == $('#6').text()) {
                    alert('win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }
        }
        
        //bottom row check
        if ($('#board').find('#7').text() !== '+'){
            if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                if ($('#board').find('#7').text() == $('#9').text()) {
                    alert('win ' + jugador);
                    $('td').attr('disabled', true);
                }
            }
        }


}
  
$('.game').on('click',function(){
        $('td').text('+');
    });

