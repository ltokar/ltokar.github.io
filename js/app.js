  $(document).ready (function(){
  	$('.STRplayerSM,.STRplayerLG').fadeOut(0.5).fadeIn(2000);
  	  		$('#form-btn').click(function(){
    	console.log('The form button was clicked');
    	alert('We love music!');
    }); //end form button click

	$('#free-btn').click(function(){
		$('#free-ex').animate({
			height: 'toggle'
		}, 'swing', function (){			
			$('#free-btn').css({
				backgroundColor: '#E0F0FF'				
			});//end free button CSS
		});//end freeBtn animate	
	});//end freeBtn animate click

	$('#restrict-btn').click(function(){
		$('#restrict-ex').animate({
			height: 'toggle'
		}, 'swing', function (){			
			$('#restrict-btn').css({
				backgroundColor: '#E0F0FF'				
			});//end restrict button CSS
		});//end restrict-btn animate	
	});//end restrict-btn click

	$('#comm-btn').click(function(){
		$('#comm-ex').animate({
			height: 'toggle'
		}, 'swing', function (){			
			$('#comm-btn').css({
				backgroundColor: '#E0F0FF'				
			});//end comm button CSS
		});//end comm-btn animate
	});//end comm-btn click

	$('#spec-btn').click(function(){
		$('#spec-ex').animate({
			height: 'toggle'
		}, 'swing', function (){			
			$('#spec-btn').css({
				backgroundColor: '#E0F0FF'				
			});//end spec button CSS
		});//end spec-btn animate	
	});//end spec-btn click

	

     $(function () {
            $('.nav-tabs a:first').tab('show');
        }); //end licensing tabs
     $('#inSitu-btn').hover(function(){
     		console.log('The spec button was hovered over!');
     		$('#inSitu-btn').css({
     			backgroundColor: 'green'
     		}); // end green css
     		}, function(){
     		console.log('The spec button was left!');
     		$('#inSitu-btn').css({
     			backgroundColor: '#007ACC'
     		}); //end blue css
          }); //end spec button hover
   }); //end ready