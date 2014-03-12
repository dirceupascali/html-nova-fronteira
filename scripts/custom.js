// aqui vai a customização de plugins

$(function() {
    // cycle home
	$('.pics1').cycle({ 
	    fx:     'fade', 
	    speed:   1000, 
	    timeout: 4000
	});
	$('.pics1-2').cycle({ 
	    fx:     'fade', 
	    speed:   1000, 
	    timeout: 5000
	});
	$('.pics2').cycle({ 
	    fx:     'fade', 
	    speed:   1000, 
	    timeout: 7000
	});
	$('.pics3').cycle({ 
	    fx:     'fade', 
	    speed:   1000, 
	    timeout: 8000
	});
    
    // lightbox galeria
    $(".group1").colorbox({rel:'group1'});

    //carousel galeria
    $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

    //placeholder on IE
    if(!$.placeholder.input || !$.placeholder.textarea) {
        $('#hint').hide();
    }

    //css hack IE 10
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
});