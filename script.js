const holes = document.querySelectorAll(".hole");
const scoreText = document.getElementById("score");

let score = 0;

function showMole() {
    holes.forEach(hole => hole.classList.remove("mole"));

    const randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].classList.add("mole");
}

holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("mole")) {
            score++;
            scoreText.textContent = score;
            hole.classList.remove("mole");
        }
    });
});

setInterval(showMole, 800);
