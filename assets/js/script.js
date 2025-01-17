// hero-section //

// testimonial //

$(".slider-1").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dot: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    991: {
      items: 1,
    },
  },
});

$(".slider-2").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 3,
    },
    991: {
      items: 4,
    },
  },
});

$(".slider-3").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 2,
    },
    991: {
      items: 5,
    },
  },
});

$(".slider-4").owlCarousel({
  slideBy: 1,
  autoplay: false,
  loop: true,
  padding: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

$(".slider-5").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

//  top button  //

$(document).ready(function () {
  $(".top").hide(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn(200);
    } else {
      $(".top").fadeOut(300);
    }
  });
  $(".top").click(function () {
    event.preventDefault();

    $("html , body").animate({ scrollTop: 0 }, 500);
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sticky menu bar //

function menuSticky() {
  if ($(".is-sticky-on").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $(".is-sticky-on").addClass("is-sticky-menu");
      } else {
        $(".is-sticky-on").removeClass("is-sticky-menu");
      }
    });
  }
}
menuSticky();

// AOS.init();

// JavaScript
function playVideo() {
  // JavaScript
  class VideoModalManager {
    constructor() {
      this.init();
    }
    init() {
      $(".video-btn").click(function () {
        const $videoSrc = $(this).data("src");
        $(".modal").data("videoSrc", $videoSrc);
      });
      $(".modal").on("shown.bs.modal", function (e) {
        const $videoSrc = $(this).data("videoSrc");
        console.log("Video Source in modal:", $videoSrc); // Debugging
        $(this)
          .find("#video")
          .attr("src", $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
      });
      $(".modal").on("hide.bs.modal", function (e) {
        $(this).find("#video").attr("src", "");
      });
    }
  }
  // Initialize the VideoModalManager
  const videoModalManager = new VideoModalManager();
}

playVideo();

// counter

$(document).ready(function () {
  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// titl animation //
