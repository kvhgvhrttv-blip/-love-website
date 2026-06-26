const yes = document.getElementById("yes");
const no = document.getElementById("no");
const box = document.getElementById("box");

let count = 0;
let size = 32;

yes.onclick = function () {
    box.innerHTML = `
        <h1 id="message">💖 เย้เธอรักเค้า 💖</h1>
        <button id="again">เอาใหม่</button>
    `;

    document.getElementById("again").onclick = function () {
        location.reload();
    };
};

no.onclick = function () {
    count++;

    no.style.position = "absolute";
    no.style.left = Math.random() * (window.innerWidth - 120) + "px";
    no.style.top = Math.random() * (window.innerHeight - 70) + "px";

    size += 15;
    yes.style.fontSize = size + "px";
    yes.style.padding = (20 + count * 4) + "px " + (40 + count * 8) + "px";

    if (count >= 10) {
        no.style.display = "none";
    }
};
