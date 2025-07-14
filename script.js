const cardEls = document.querySelectorAll(".card");

cardEls.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
  });
});

function removeActiveClasses() {
  cardEls.forEach((card) => {
    card.classList.remove("active");
  });
}
