  $(document).ready (function(){

  	//this is to fade in the appropriate player 

  	$('.STRplayerSM,.STRplayerLG').fadeOut(0.5).fadeIn(2000);

  	//this is to provide different feedback text below the selection box after the user makes a selection from the drop-down menu, and is based on which selection is made
 	
 	$('#song2').change(function(){
 		if ($('#song2').val() == 'Early')
 			{
 				$('.search-group .help-block').text ('a contemplative choice');
 			} else if ($ ('#song2').val() == 'Midnight')
 			{
 				$('.search-group .help-block').text ('darkness never sounded so good');
 
 			} else if ($ ('#song2').val() == 'Walk')
 			{
 				$('.search-group .help-block').text ('Oh baby when you walk with me...');

 		} else {
			$('.search-group .help-block').text ('just fyi:  most licenses are non-exclusive');
 			}
 	});//end change


 	//this is to throw an error if user begins to, but does not complete a required field, i.e., "loses focus"

 	$('#name').focusout(function(){
 		if ($('#name').val().length == 0) {
 			$('.name-group .help-block').text('Please enter your name.');
 			$('.name-group').attr({
 				class:'col-sm-6 form-group name-group has-error'
 			}); //end CSS attribute info

 		//this is to clear the error if user completes the required field

 		} else {
 			$('.name-group .help-block').text('');
 			$('.name-group').attr({
 				class:'col-sm-6 form-group name-group'
 			})//end CSS attribute clear
 		}
 	}); //end focusout end


//this is error checking for required field completion when the submit button is clicked

$('button').click(function(submit){
	if ($('#name').val().length == 0) {
 			$('.name-group .help-block').text('Please enter your name.');
 			$('.name-group').attr({
 				class:'col-sm-6 form-group name-group has-error'
 			}); //end CSS attribute info
 			submit.preventDefault();
 		}

});//end submit button click


//click-effects on licensing landing page button for license-now form
  	  		$('#form-btn').click(function(){
    	console.log('The form button was clicked');
    	alert('We love music!');
    }); //end form button click


//animate the licensing type info to show/hide
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

	
//from Assignment 1 to make the tabs on the page work
     $(function () {
            $('.nav-tabs a:first').tab('show');
        }); //end licensing tabs

//to create the hover effect on the portfolio link button on the licensing landing page and to test in the console that it is working
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