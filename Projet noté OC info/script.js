document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("flipped");
        card.style.pointerEvents = "none";
    });
});