document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".carousel-slide");
  const cards = document.querySelectorAll(".card");

  let counter = 0;
  const slideWidth = slide.clientWidth / 3;

  setInterval(() => {
    counter++;
    if (counter >= cards.length - 2) {
      counter = 0;
    }
    slide.style.transform = `translateX(-${counter * slideWidth}px)`;
  }, 2000);
});