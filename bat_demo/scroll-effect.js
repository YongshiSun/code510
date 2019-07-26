$(window).load(
    function do_this_when_the_window_loads() {
        $(window).on('scroll',
            function do_this_when_scrolling_happens(ev) {
                var $bat = $('#bat1');
                var $witch = $('#witch1');
                var scrollTop = $(window).scrollTop();
                var position = 800 - 2*scrollTop;
                $('#bat1').css({'padding-left': position+'px'});
                $('#witch1').css({'padding-right': position+'px'});
            } // closes function do_this_when_scrolling(ev) { ... }
        ); // closes $(window).on('scroll', ... );
    } // closes function do_this_when_the_window_loads() { ... }
); // closes $(window).load( ... );
