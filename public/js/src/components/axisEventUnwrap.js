//unwraps an event in calendar plugin [removes weekend and weekday subdivs]
$j(document).ready(function(){
	
	if($j('[class^="events"]').length) {
    	var calWrap = $j('[id$="EventsWrapper"]');

		$j('[id$="EventsWrapper"] > div > a').each(function(){
  			var parent= $j(this).parent();
  			if($j(parent).attr('id') !== $j(calWrap).attr('id')) {
   				$j(this).unwrap(); 
  			}
		})
	}

});