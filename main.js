// Second Smooth Scroll Option //

// $('.navbar a').on('click', function(e) {
//    if(this.hash !=='') {
//        e.preventDefault();
//
//        const hash = this.hash;
//
//        $('html, body').animate(
//            {
//                scrollTop: $(hash).offset().top
//            },
//            800
//        );
//    }
// });

// Third Smooth Scroll Option

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});