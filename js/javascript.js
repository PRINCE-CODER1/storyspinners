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

const accord = document.querySelectorAll(".accordian");
const accitems = document.querySelectorAll(".acc-cnt");
accord.forEach((acc, index) => {
  acc.addEventListener("click", function () {
    accitems.forEach((item) => {
      if (item !== accitems[index]) {
        item.classList.remove("accord");
      }
    });
    accitems[index].classList.toggle("accord");
  });
});

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Perform validation
  if (validateForm()) {
    alert("Form submitted successfully!");
  }
});

function validateForm() {
  let isValid = true;

  // Name validation
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  // contact validation
  const contactInput = document.getElementById("text");
  const contactError = document.getElementById("contactError");
  if (contactInput.value.trim() === "") {
    contactError.textContent = "Contact is required";
    isValid = false;
  }

  // textarea validation
  const textareaInput = document.getElementById("textarea");
  const textareaError = document.getElementById("textareaError");
  if (textareaInput.value.trim() === "") {
    textareaError.textContent = "Contact is required";
    isValid = false;
  }

  return isValid;
}

// clear errors
function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function (element) {
    element.textContent = "";
  });
}

responsive navbars
const barclick = document.querySelector("menu-bar");
const resnav = document.querySelector("res-nav");

barclick.addEventListener("click", function () {
  resnav.classList.add("navoc");
});
// menu bar logic
function menuclick() {
  const resnav = document.querySelector(".res-nav");
  resnav.classList.toggle("navoc");
}
