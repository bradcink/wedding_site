$(document).ready(function() {
    var boxWidth = 300;
     
    function centerBox() {
         
        /* Preliminary information */
        var winWidth = $(window).width();
        var winHeight = $(document).height();
        var scrollPos = $(window).scrollTop();

        /* auto scroll bug */
         
        /* Calculate positions */
         
        var disWidth = ((winWidth - boxWidth)/(boxWidth))+50
        var disHeightBottom = 253;
        var disHeightTop = 100;
         
        /* Move stuff about */
        $('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'bottom' : disHeightBottom+'px', 'top' : disHeightTop+'px'});
        $('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
     
        return false;
    }
     
     
    $(window).resize(centerBox);
    $(window).scroll(centerBox);
    centerBox();    
 
    $('[class*=popup-link]').click(function(e) {
     
        /* Prevent default actions */
        e.preventDefault();
        e.stopPropagation();
         
        /* Get the id (the number appended to the end of the classes) */
        var name = $(this).attr('class');
        var id = name[name.length - 1];
        var scrollPos = $(window).scrollTop();
         
        /* Show the correct popup box, show the blackout and disable scrolling */
        $('#popup-box-'+id).show();
        $('#blackout').show();
        $('html,body').css('overflow', 'hidden');
         
        /* Fixes a bug in Firefox */
        $('html').scrollTop(scrollPos);
    });
    $('[class*=popup-box]').click(function(e) { 
        /* Stop the link working normally on click if it's linked to a popup */
        e.stopPropagation(); 
    });
    $('html').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Hide the popup and blackout when clicking outside the popup */
        $('[id^=popup-box-]').hide(); 
        $('#blackout').hide(); 
        $("html,body").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });
    $('.close').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Similarly, hide the popup and blackout when the user clicks close */
        $('[id^=popup-box-]').hide(); 
        $('#blackout').hide(); 
        $("html,body").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });
});