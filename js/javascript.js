const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  allowTouchMove: true,

  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var headerMainInner = document.querySelector("#page-header");
swiper.on("slideChange", function () {
  // Remove existing classes from header-main-inner
  headerMainInner.classList.remove("header-yellow");
  headerMainInner.classList.remove("header-blue");

  // Get the active slide
  var activeSlide = swiper.slides[swiper.activeIndex];

  // Check if swiper-color-1 class is present on the active slide
  if (activeSlide.classList.contains("swiper-color-1")) {
    headerMainInner.classList.add("header-blue");
  }

  // Check if swiper-color-2 class is present on the active slide
  if (activeSlide.classList.contains("swiper-color-2")) {
    headerMainInner.classList.add("header-yellow");
  }
});
function showAnswer(answerText) {
  var answerContainer = document.querySelector(".answers");
  answerContainer.innerHTML = "<p>" + answerText + "</p>";
  answerContainer.classList.add("show");
}
gsap.set(".choose-sec", {
  x: -50,
  opacity: 0,
});
gsap.to(".choose-sec", {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".choose-sec",
    start: `10% 75%`,
    end: `20% bottom`,
    scroller: "body",
    scrub: 1,
  },
});

gsap.to(".pursuit-sec", {
  backgroundColor: "#000000",
  scrollTrigger: {
    trigger: ".pursuit-sec",
    start: `10% 50%`,
    end: `top bottom`,
    scrub: 2,
  },
});
