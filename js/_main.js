( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){

	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 

	}
	
	function verticalCenter($parent, $child) {
		var parentHeight = $( $parent ).height();
		var childHeight = $( $child ).height();
		
		var padding = (parentHeight - childHeight) / 2;
		
		$( $child ).css('padding-top', padding);
		
		//console.log(padding);
	
	}
	
	
	
	if( $( window ).width() <= '640' ) {
		$( '.product-content .image' ).height($( window ).height());
	} else {
		$( '.no-bg' ).height(($( window ).height() / 2));
		$( '.white-bg' ).height(($( window ).height() / 2));
		$( '.product-content .image' ).height($( window ).height());
		$( '.firma-content' ).height($( window ).height());
		$( '.fullheight' ).height($( window ).height());
		$( '.halfheight' ).height(($( window ).height() / 2));
		
		verticalCenter('#intro', '#intro-content');
		verticalCenter(window, '#produkty');
		verticalCenter('#kadra', '#kadra-content');
		verticalCenter('#desc', '#desc-content');
		verticalCenter('#slide-4', '#cooperation-wrapper');
	
	}
	
	//verticalCenter(window, '.product-content');
	
	
		
} )( jQuery );

$( 'nav.mobile .menu' ).click(function() {
	$( '.menu-toggle' ).slideToggle();
});

$( document ).ready(function() {
	var table = $( 'table.squares' );
	var width = $( table ).width();
	var height = (width / 3) * 2; 
	$( table ).height( height );

	
});

/* scroll form nav to element */
$( 'nav ul li a' ).click(function( event ) {
	event.preventDefault();
	
	
	
	if( $( window ).width() <= '640' ) {
		var navbar = $( 'nav.mobile .logo' ).outerHeight() + $( 'nav.mobile .menu' ).outerHeight();
		$( '.menu-toggle:visible' ).slideToggle();
	} else {
		var navbar = $( 'nav.navbar' ).outerHeight();
	}
	
	console.log(navbar);
	
	var href = $( this ).attr('href');
		
	$('html, body').animate({
        scrollTop: $( href ).offset().top - navbar
    }, 1000);
});

/* scroll from square to element */
$( 'table.squares span' ).click(function() {
	
	var id = $( this ).data('id');
	var parent = "produkty";
			
	$( '#' + parent ).hide();
	$( '.product-content' ).hide();
	//$( '#produkty-' + id ).show("slide", { direction: "left" }, "slow");
	$( '#' +  id ).css('display', 'block');
	
	if( $( window ).width() <= '640' ) {
		var navbar = $( 'nav.mobile' );
	} else {
		var navbar = $( 'nav.navbar' );
	}
	
	$('html, body').animate({
        scrollTop: $( '#' + id ).offset().top - navbar.outerHeight()
    }, 1000);
	
});


$( '.pictogram' ).click(function() {
	
	var id = $( this ).data('id');
	var parent = $( this ).parent().data('type');
	//alert(parent);
	
	//console.log(id); 
		
	$( '#' + parent ).hide();
	//$( '#produkty-' + id ).show("slide", { direction: "left" }, "slow");
	$( '#' + parent + '-' + id ).css('display', 'block');
	
	if( $( window ).width() <= '640' ) {
		var navbar = $( 'nav.mobile' );
	} else {
		var navbar = $( 'nav.navbar' );
	}
	
	
	$('html, body').animate({
        scrollTop: $( '#' + parent + '-' + id ).offset().top - navbar.outerHeight()
    }, 1000);
	
});

$( '.close' ).click(function() {
	
	var parentId = $( this ).parent().attr('id');
	
	var parentData = $( this ).parent().data('type');
	
	//console.log(id);
	
	$( '#' + parentId ).hide();
	$( '#' + parentData ).show();
});

if( $( window ).width() <= '640' ) {
	
	$( "#team-1" ).show();
	
	
	
	$( ".kadra-nav" ).click(function() {
		var current_id;
		var dir = $( this ).data('direction');
		var visible_id = $( ".kadra-mobile-grid li:visible" ).data('team');
		
		//console.log(current_id);
		
		
		
		if(dir == "prev") {
			current_id = visible_id - 1;
		} else if(dir == "next") {
			current_id = visible_id + 1;
		}
		
		if(current_id <= 1) {
			$( ".kadra-nav.nav-prev" ).hide();
		} else if(current_id >= 5) {
			$( ".kadra-nav.nav-next" ).hide();
		} else {
			$( ".kadra-nav" ).show();
		}
		
		$( "#team-img-" + visible_id ).hide();
		$( "#team-img-" + current_id ).show();
		
		$( "#team-" + visible_id ).hide();
		$( "#team-" + current_id ).show();
		
		
	});

} else {
	$( '#firma-1 li' ).hover(function() {
		
		var selected_id = $( '.selected-person' ).data('team');
		$( '.selected-person' ).css('background-image', 'url(img/firma/kadra-' + selected_id + '-blur.jpg)');
		$( '.selected-person' ).removeClass('selected-person');
		
		//alert('test');
		$( '.team-content').hide();
		$( '.kadra-grid img').removeClass('no-overlay');
		
		$( this ).addClass('selected-person');
		
		var id = $( this ).data('team');
		
		$( this ).css('background-image', 'url(img/firma/kadra-' + id + '.jpg)');
		
		$( this ).mouseleave(function() {
			//$( this ).css('background-image', 'url(img/firma/kadra-' + id + '-blur.jpg)');
		});
		
		//$( this ).toggleClass('blur');
		$( this ).children('img').addClass('no-overlay');
		
		$( '#team-' + id ).show();
	});
}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("scroll-navbar");
    } else {
        $(".navbar").removeClass("scroll-navbar");
    }

	$(".f-panel").click(function() {
		$("#furniture-elements").removeClass("hidden");
		$("#furniture-elements").addClass("open");
	});
});




