  $(document).ready (function(){
  	$('.STRplayerSM,.STRplayerLG').fadeOut(0.5).fadeIn(2000);
    $('#form-btn').click(function(){
    	console.log('The form button was clicked');
    	alert('We love music!');
    }); //end form button click
     $(function () {
            $('.nav-tabs a:first').tab('show');
        }); //end licensing tabs
   }); //end ready