let character = document.getElementById("character");
let block = document.getElementById("block");
let game = document.getElementById("game");
block.classList.add("brzina1");
let br = 0;
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        br++;
        document.querySelector("h1").innerHTML = br;
        document.querySelector("h2").innerHTML = "Razina 1";
    }




    setTimeout(function () {

        character.classList.remove("animate");

    }, 500);

    if (br >= 8) {
        game.classList.add("game2");
        document.querySelector("h2").innerHTML = "Razina 2";
        block.classList.add("brzina2");
    }


}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();

    }


});

let kraj = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 300) {
        // block.style.animation = "none";
        // block.style.display = "none";
        alert("Izgubio si, Score:" + br);
        br = 0;
        document.querySelector("h1").innerHTML = br;
        game.classList.remove("game2");
        block.classList.remove("brzina2");
    }
}, 10)

