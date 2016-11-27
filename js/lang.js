$( document ).ready(function() {
	//alert('ready!');
	
	var lang, d;
	
	
		
	var language = function(lang) {
		$.getScript("lang/" + lang + ".js", function(){
		
		   	//alert("Script loaded and executed.");
		   	
			var d = dictionary;
		    /*
		    for (var k in d){
			    if (d.hasOwnProperty(k)) {
			         //alert("Key is " + k + ", value is" + d[k]);
			         $( '#lang_' + k ).html(d[k]);
			    }
			}
			*/
			
			//$('[data-translate]').css('background', 'red');
			
			$('[data-translate]').html(function () {
	            var key = $(this).data("translate");
	            if (d.hasOwnProperty(key)) {
	                return d[key];
	            }
	        });
		});
	} 
	
	language('pl');
	
	$( '#intro li' ).click(function() {
		//alert('test przycisku');
		sel_lang = $( this ).html().toLowerCase();
		language(sel_lang);
		$( '#intro' ).delay( 1000 ).fadeOut("slow");
	});
	
	$( 'nav.mobile ul.nav-lang li' ).click(function() {
		//alert('test przycisku');
		sel_lang = $( this ).html().toLowerCase();
		language(sel_lang);
		$( '.menu-toggle' ).slideToggle();
	});
	
	
	/*
	// set cookie manually
	$.cookie('lang', 'en');
	// read cookie
	lang = $.cookie('lang');
	*/
	
	
});
