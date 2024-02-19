let btn = document.querySelector("button");
let box = document.querySelector(".box"); // corrected box selector

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let randomcolor = getRandomColor();
    h1.innerText = randomcolor;

    box.style.backgroundColor = randomcolor;
    console.log("color update");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256); // corrected random number generation
    let green = Math.floor(Math.random() * 256); // corrected random number generation
    let blue = Math.floor(Math.random() * 256); // corrected random number generation

    let color = `rgb(${red}, ${green}, ${blue})`; // corrected template string
    return color;
}
