var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    navigation: {
      nextEl: ".navs_wrapper .next",
      prevEl: ".navs_wrapper .prev",
    },
    loop: true,
});

const observer = new IntersectionObserver(playAnimation);
const animations = [];

// Define an array of animation configurations
const animationConfigurations = [
  {
    elementId: "lottie-animation",
    jsonPath: "assets/json-files/pol-tank.json",
  },
  {
    elementId: "lottie-animation-2",
    jsonPath: "assets/json-files/globe-animation.json",
  },
  {
    elementId: "lottie-animation-3",
    jsonPath: "assets/json-files/petrolium-tank.json",
  },
  // Add more animation configurations as needed
];

// Load animations and store them in the 'animations' array
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