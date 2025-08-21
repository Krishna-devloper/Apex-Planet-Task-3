
const questions = [
    { q: "What does CSS stand for?", a: "Cascading Style Sheets" },
    { q: "Which language runs in the browser?", a: "JavaScript" },
    { q: "What does HTML stand for?", a: "HyperText Markup Language" }
];

let current = 0, score = 0;

function loadQuestion() {
    document.getElementById("quiz-box").innerHTML =
        `<p>${questions[current].q}</p>
    <input id="answer" placeholder="Your answer">`;
}
function nextQuestion() {
    let ans = document.getElementById("answer").value;
    if (ans.toLowerCase() === questions[current].a.toLowerCase()) score++;
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerText =
            "Your Score: " + score + "/" + questions.length;
        document.getElementById("quiz-box").innerHTML = "";
    }
}
loadQuestion();


async function getJoke() {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    document.getElementById("joke-text").innerText =
        data.setup + " - " + data.punchline;
}

const images = [
    "https://picsum.photos/id/237/400/250",
    "https://picsum.photos/id/238/400/250",
    "https://picsum.photos/id/239/400/250",
    "https://picsum.photos/id/240/400/250"
];
let index = 0;
function showImage() {
    document.getElementById("carousel-img").src = images[index];
}
function next() {
    index = (index + 1) % images.length;
    showImage();
}
function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});
