// JS scroll to transform navbar color on scroll
        $(window).scroll(function(){
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
            });

            