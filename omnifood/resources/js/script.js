$(document).ready(function() {
    
    /* sticky navbar part start */
    
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '25%'
    });
    /* sticky navbar part end */
    
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });
    
    
    
    /* Navigation Scrolling */
    
    $(function(){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                    var targetOffset = $target.offset().left;
                    $('html,body').animate({scrollLeft: targetOffset}, 1000);
                    return false;
                }
            }
        });
    });
    
    
    /* Animation On scrolling */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__fadeIn');
    });
    
    
});










