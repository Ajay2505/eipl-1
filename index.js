gsap.registerPlugin(ScrollTrigger);

const observer = new IntersectionObserver(playAnimation);
const animations = [];

const animationConfigurations = [
  {
    elementId: "lottie-animation",
    jsonPath: "assets/json-files/pol-tank.json",
  },
  {
    elementId: "lottie-animation-2",
    jsonPath: "assets/json-files/globe-animation.json",
  },
//   {
//     elementId: "lottie-animation-3",
//     jsonPath: "assets/json-files/petrolium-tank.json",
//   },
];

animationConfigurations.forEach((config) => {
  const element = document.querySelector(`#${config.elementId}`);
  const animation = lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: config.jsonPath,
  });
  animations.push({ element, animation });
});
      
function playAnimation(entries, observer) {
  entries.forEach((entry) => {
    animations.forEach((anim) => {
      if (entry.target === anim.element) {
        if (entry.isIntersecting) {
          anim.animation.play();
        } else {
          anim.animation.pause();
        }
      }
    });
  });
}

// Observe all elements with animations
animations.forEach((anim) => {
  observer.observe(anim.element);
});


const swiper = new Swiper(".mySwiper", {
    // loop: true,
    autoplay: true,
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
});

const gsapSwiper = new Swiper(".gsapSwiper", {    
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: false,
    mousewheel: {
        releaseOnEdges: true,
    },
    allowTouchMove: false
});


// var pin = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.gsapSwiper',
//       pin: true,
//       start: 'top top',
//       end: '+=100%', // Adjust as needed
//       scrub: 1, // Adjust the scrubbing speed
//     },
// });

// var scrollTimeout;

// function handleScroll(direction) {
//   clearTimeout(scrollTimeout);

//   if (direction === 'up' && gsapSwiper.activeIndex > 0) {
//     gsapSwiper.slidePrev();
//   } else if (direction === 'down' && gsapSwiper.activeIndex < gsapSwiper.slides.length - 1) {
//     gsapSwiper.slideNext();
//   } else {
//     // Release the pin if there are no more slides
//     scrollTrigger.endTrigger.scroll();
//   }

//   // Adjust the timeout duration as needed
//   scrollTimeout = setTimeout(function () {
//     gsap.to(window, {
//       scrollTo: { y: `+=${direction === 'up' ? '-' : ''}50%` },
//       duration: 0.5,
//       onComplete: function () {
//         scrollTrigger.refresh();
//       },
//     });
//   }, 500); // Delay before re-enabling scroll
// }

// // Listen for scroll events
// window.addEventListener('wheel', function (event) {
//   if (event.deltaY > 0) {
//     handleScroll('down');
//   } else if (event.deltaY < 0) {
//     handleScroll('up');
//   }
// });


// gsap.to(".testimonials_section", {
//     scrollTrigger: {
//         trigger: ".testimonials_section",
//         pin: true,
//         pinSpacer: true,
//         start: "top top",
//         end: 'center top',
//         // markers: true,
//     }
// });

// let timer;

// const wheelHandler = (up) => {
//     clearTimeout(timer);
//     if (up) {   
//         timer = setTimeout(() => {
//             gsapSwiper.slideNext();
//         }, 100);
//     } else {
//         timer = setTimeout(() => {
//             gsapSwiper.slidePrev();
//         }, 100);
//     }
// }

// document.querySelector(".testimonials_section").addEventListener("wheel", evt => {
//     if (evt.deltaY > 0) {
//         wheelHandler(true);
//     } else {
//         wheelHandler(false);
//     }
//     // evt.preventDefault();
// });
