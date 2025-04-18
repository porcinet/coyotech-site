document.addEventListener("wheel", (event) => {
    event.preventDefault();
    const scrollTexts = document.querySelectorAll(".scrollText"); // Select all elements with the class "scrollText"
    scrollTexts.forEach((scrollText) => {
        scrollText.classList.add("visible");
        createStarEffect(scrollText);
    });
}, { passive: false });

document.addEventListener("scroll", () => {
    let texts = document.querySelectorAll(".scrollText");
    let scrollPosition = window.scrollY;
    let delay = 300; // Temps entre l'apparition des lignes

    texts.forEach((text, index) => {
        let revealPoint = 100 + index * delay;
        if (scrollPosition > revealPoint) {
            text.style.opacity = "1";
        }
    });
});

function createStarEffect(element) {
    let star = document.createElement("span");
    star.innerHTML = "✦";
    star.style.position = "absolute";
    star.style.color = "#fff";
    star.style.fontSize = "1rem";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = "0";
    star.style.transition = "opacity 1s ease-in-out";
    document.body.appendChild(star);
    setTimeout(() => star.style.opacity = "1", 100);
    setTimeout(() => star.remove(), 2000);
}
