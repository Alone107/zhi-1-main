const swiper = new Swiper(".slider", {
  speed: 1600,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // }
});

// -------------------------Popup----------------------------------

const button = document.querySelector(".header-zhiviesteni-btn");
const close = document.querySelector(".popup-zhiviesteni-close");
const shadow = document.querySelector(".shadow");
const popup = document.querySelector(".popup-zhiviesteni");
const form = document.querySelector(".popup-zhiviesteni-form");

button.addEventListener("click", function () {
  popup.classList.add("popup-open");
  shadow.classList.add("popup-open");
});
close.addEventListener("click", function () {
  popup.classList.remove("popup-open");
  shadow.classList.remove("popup-open");
});
shadow.addEventListener("click", function () {
  popup.classList.remove("popup-open");
  shadow.classList.remove("popup-open");
});

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let tel = document.getElementById("tel").value;

  let response = await fetch("sendmail.php", {
    method: "POST",
    body: JSON.stringify(tel),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  let result = await response.text();
  popup.classList.remove("popup-open");
  shadow.classList.remove("popup-open");
}

// -------------------Gsap------------------------

// const logo = document.querySelector(".header-zhiviesteni-logo-1");

// var tl = gsap.timeline({ delay: 0.7 });
// tl.from(logo, { duration: 0.5, y: 100, opacity: 0 });
// tl.from(".header-zhiviesteni-title", { x: -1000, duration: 0.7, opacity: 0 });
// tl.from(".header-zhiviesteni-text", { x: -1000, duration: 0.7, opacity: 0 });
// tl.from(".header-zhiviesteni-btn", { x: -1000, duration: 0.7, opacity: 0 });

// let tl2 = gsap.timeline({
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".header-zhiviesteni",
//     start: "center top",
//   },
// });

// tl2
//   .from(".zhiviesteni-about-title", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   })
//   .from(".zhiviesteni-about-img", {
//     duration: 0.5,

//     y: 100,
//     opacity: 0,
//   })
//   .from(".zhiviesteni-about-text", {
//     duration: 0.7,

//     y: 100,
//     opacity: 0,
//   })
//   .from(".zhiviesteni-about-subtitle", {
//     duration: 0.7,

//     y: 100,
//     opacity: 0,
//   })
//   .from(
//     ".zhiviesteni-about-age",
//     {
//       duration: 0.7,

//       y: 100,
//       opacity: 0,
//     },
//     "-=1"
//   );

// let tl3 = gsap.timeline({
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".zhiviesteni-about",
//     start: "center top",
//   },
// });

// tl3
//   .from(".zhiviesteni-project-title", {
//     duration: 1,
//     x: -1000,
//     opacity: 0,
//   })
//   .from(".zhiviesteni-project-text", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   });

// let tl4 = gsap.timeline({
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".zhiviesteni-project",
//     start: "center top",
//   },
// });

// tl4
//   .from(".slide-title", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   })
//   .from(".slide-subtitle", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   });

// let tl5 = gsap.timeline({
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".zhiviesteni-works-slider",
//     start: "center top",
//   },
// });

// tl5
//   .from(".about-title", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   })
//   .from(".mySwiper", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   });

// let tl6 = gsap.timeline({
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".about",
//     start: "center top",
//   },
// });

// tl6.from(".project-title", {
//   duration: 1,
//   y: 100,
//   opacity: 0,
// });

// let tl7 = gsap.timeline({
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".project",
//     start: "center center",
//   },
// });

// tl7
//   .from(".zhiviesteni-team-title", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   })
//   .from(".zhiviesteni-team-block", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//   });

// let tl8 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// tl8.from(".about-link", {
//   duration: 1,
//   opacity: 0,
//   y: 20,
// });
