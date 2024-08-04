document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const playAgainButton = document.getElementById("play-again-btn");
    const colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF"];
    let colorIndex = {};

    // Function to reset the colors of the cards
    function resetCards() {
        cards.forEach(card => {
            card.style.backgroundColor = "#e0e0e0"; // Reset to original color
            colorIndex[card.id] = 0; // Reset color index
        });
    }

    // Add event listeners to cards to change color on click
    cards.forEach(card => {
        colorIndex[card.id] = 0; // Initialize color index for each card
        card.addEventListener("click", () => {
            // Change the background color of the clicked card
            card.style.backgroundColor = colors[colorIndex[card.id]];
            // Update the color index for the next click
            colorIndex[card.id] = (colorIndex[card.id] + 1) % colors.length;
        });
    });

    // Add event listener to the "Play Again" button to reset the cards
    playAgainButton.addEventListener("click", resetCards);
});