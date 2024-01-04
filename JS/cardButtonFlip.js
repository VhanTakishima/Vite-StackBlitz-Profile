document.addEventListener("DOMContentLoaded", function (){
const cardContainer = document.querySelector(".cards-container");

    cardContainer.addEventListener("click", (event) => {
        const target = event.target;

        if (target.classList.contains("cardFlipper") || target.closest(".cardFlipper")) {
        const card = target.closest(".card");
        const cardInner = card.querySelector(".card-inner");
        cardInner.style.transform = "rotateY(180deg)";
        }
    });

    cardContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains("card-back")) {
          const cardInner = clickedElement.closest(".card").querySelector(".card-inner");
          cardInner.style.transform = "rotateY(0deg)"; // Flip the card back to its original position
        }
      });


});