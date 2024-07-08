function expandsections() {
    var cards = document.querySelector(".hidden");
    if (cards.style.display === "block") {
        cards.style.display = "none";
    } else {
        cards.style.display = "block";
    }
}