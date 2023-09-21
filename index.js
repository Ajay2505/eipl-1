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


document.querySelectorAll('.number-animate').forEach( (el) => {
  const endValue = el.getAttribute('data-end-value');
  const incrementValue = el.getAttribute('data-increment');
  const durationValue = el.getAttribute('data-duration');
  
  ScrollTrigger.create({
    trigger: el,
    start: "top bottom",
    end: "center center",
    onEnter: () => {
      if (endValue) numberAnimation(el, endValue, incrementValue, durationValue);
    },
  });
  
});


function numberAnimation(el, endValue, incrementor, duration) {
  anime({
    targets: el,
    textContent: endValue,
    round: incrementor ? 1/incrementor : 1/5,
    easing: 'easeInOutQuad',
    duration: duration ? duration : 3000,
  });
}

const timeline = gsap.timeline();

timeline.to(".op_timeline", {
    opacity: 1,
    stagger: .5 
});

timeline.to(".main_section .bg_wrapper", {
    duration: .7,
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)"
});

timeline.to(".main_section .logos .img_wrapper", {
    opacity: 1,
    stagger: .3
});