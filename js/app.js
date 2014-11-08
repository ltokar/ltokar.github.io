  $(document).ready (function(){
  	$('.STRplayerSM,.STRplayerLG').fadeOut(0.5).fadeIn(2000);
    $('#form-btn').click(function(){
    	console.log('The form button was clicked');
    	alert('We love music!');
    }); //end form button click

	$('#free-btn').click(function(){
		$('#free-ex').animate({
			height: 'toggle'
		});//end freeBtn animate	
	});//end freeBtn click

	$('#restrict-btn').click(function(){
		$('#restrict-ex').animate({
			height: 'toggle'
		});//end restrict-btn animate	
	});//end restrict-btn click

	$('#comm-btn').click(function(){
		$('#comm-ex').animate({
			height: 'toggle'
		});//end comm-btn animate	
	});//end comm-btn click

	$('#spec-btn').click(function(){
		$('#spec-ex').animate({
			height: 'toggle'
		});//end spec-btn animate	
	});//end spec-btn click

	

     $(function () {
            $('.nav-tabs a:first').tab('show');
        }); //end licensing tabs
     $('#inSitu-btn').hover(function(){
     		console.log('The spec button was hovered over!');
     		$('#inSitu-btn').css({
     			backgroundColor: 'red'
     		}); // end css
     }, function(){
     		console.log('The spec button was left!');
     		$('#inSitu-btn').css({
     			backgroundColor: 'blue'
     		}); //end blue css
     }); //end spec button hover
   }); //end ready