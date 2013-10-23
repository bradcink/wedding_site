function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    var $next = $active.next();    
    
    $next.addClass('active');
    
    $active.removeClass('active');
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    var $next = $active.next();

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

function slideSwitch2() {
    var $active = $('#slideshow2 IMG.active');
    var $next = $active.next();    
    
    $next.addClass('active');
    
    $active.removeClass('active');
}

$(function() {
    setInterval( "slideSwitch2()", 5000 );
});

function slideSwitch2() {
    var $active = $('#slideshow2 IMG.active');
    var $next = $active.next();

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch2()", 5000 );
});

function slideSwitch2() {
    var $active = $('#slideshow2 IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow2 IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow2 IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch2()", 5000 );
});

