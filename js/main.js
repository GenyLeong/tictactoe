$(function (){

$('#board').find('td').click(hacerclick);

$('.game').on('click',function(){
        $('td').text('+');
        var contador=0;
        $('#board').find('td').click(hacerclick);
    });

});

var contador=0;

function hacerclick(){

contador++;

if (contador%2 ==0){
	$(this).html('x');
	comparar('x');
        $(this).off("click");
   		
}

else {
	$(this).html('o');
	comparar('o');
        $(this).off("click");

}

}

function comparar(jugador){

if ($('#board').find('#1').text() !== '+'){
            if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
                if ($('#board').find('#1').text() == $('#3').text()) {
                    alert('Win ' + jugador);
                    $('td').off("click");

               }
            }

            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if ($('#board').find('#1').text() == $('#7').text()) {
                    alert('win ' + jugador);
                    $('td').off("click");
                }
            }
        
            if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#1').text() == $('#9').text()) {
                    alert('Win ' + jugador);
                    $('td').off("click");
                }
            }    
        }
        
       
        if ($('#board').find('#2').text() !== '+'){
            if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#2').text() == $('#8').text()) {
                    alert('win ' + jugador);
                    $('td').off("click");
                }
            }
        }
        
        
        if ($('#board').find('#3').text() !== '+'){
            if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
                if ($('#board').find('#3').text() == $('#9').text()) {
                    alert('win ' + jugador);
                $('td').off("click");
                }
            }
           
            if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#3').text() == $('#7').text()) {
                    alert('win ' + jugador);
                   $('td').off("click");
                }
            }
        }
        
        
        
        if ($('#board').find('#4').text() !== '+'){
            if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#4').text() == $('#6').text()) {
                    alert('win ' + jugador);
                   $('td').off("click");
                }
            }
        }
        
      
        if ($('#board').find('#7').text() !== '+'){
            if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                if ($('#board').find('#7').text() == $('#9').text()) {
                    alert('win ' + jugador);
                  $('td').off("click");
                }
            }
        }


}
  

