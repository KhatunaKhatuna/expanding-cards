// Version 1

// const cardEls = document.querySelectorAll(".card");

// cardEls.forEach((card) => {
//   card.addEventListener("click", () => {
//     removeActiveClasses();
// Add active to clicked card
//     card.classList.add("active");
//   });
// });
// Remove active from all cards
// function removeActiveClasses() {
//   cardEls.forEach((card) => {
//     card.classList.remove("active");
//   });
// }

// Version 2

const cardEls = document.querySelectorAll(".card");
let activeCard = cardEls[0];

// Set the first card active on page load
if (activeCard) {
  activeCard.classList.add("active");
}

cardEls.forEach((card) => {
  card.addEventListener("click", () => {
    if (activeCard === card) {
      activeCard = null;
      return;
    } else {
      // Remove active from previous active card
      if (activeCard) activeCard.classList.remove("active");
      // Add active to clicked card
      card.classList.add("active");
      activeCard = card;
    }
  });
});
