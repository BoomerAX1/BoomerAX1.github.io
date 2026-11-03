// creating a mutable score value
let score = 0;

const c = document.getElementById("correct");

c.addEventListener("change", function () {
    score += 1;

    document.getElementById("demo").innerHTML =
        "Total score: " + score;
});