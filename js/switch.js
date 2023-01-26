let day;
switch (new Date().getDay()) {
  case 0:
    day = "Learn at your comfort zone";
    break;
  case 1:
    day = "Future-ready skills on your schedule";
    break;
  case 2:
    day = "Lets learn together";
    break;
  case 3:
    day = "Intresting courses available";
    break;
  case 4:
    day = "Learning that gets you";
    break;
  case 5:
    day = "Black Friday";
    break;
  case  6:
    day = "Explore more information";
}
document.getElementById("demo").innerHTML = day;




$(document).ready(function()
{

   
        if($('.bbb_viewed_slider').length)
        {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                autoplay:true,
                autoplayTimeout:6000,
                nav:false,
                dots:false,
                responsive:
                {
                    0:{items:1},
                    575:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1199:{items:6}
                }
            });

            if($('.bbb_viewed_prev').length)
            {
                var prev = $('.bbb_viewed_prev');
                prev.on('click', function()
                {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.bbb_viewed_next').length)
            {
                var next = $('.bbb_viewed_next');
                next.on('click', function()
                {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }


    });
