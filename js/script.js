// console.log("script here!");
let colors = ["red", "green", "yellow", "blue"];
let i = 1;
let colorArray;
let x = 0;

let blueAudio = new Audio('sounds/blue.mp3');
let greenAudio = new Audio('sounds/green.mp3');
let redAudio = new Audio('sounds/red.mp3');
let yellowAudio = new Audio('sounds/yellow.mp3');
let wrongAudio = new Audio('sounds/wrong.mp3');

// Game Starting Chapter

$(document).keypress(function () {

    colorArray = [];

    $("h1").text("Level " + i);
    animateDiv(createRandomColor());
});

function createRandomColor() {
    var randomNumber = Math.floor(Math.random() * 4);

    return colors[randomNumber];
}

function animateDiv(color) {

    switch (color) {

        case "green":
            toggleAnimation(".green");
            colorArray.push("green");
            break;
        case "red":
            toggleAnimation(".red");
            colorArray.push("red");
            break;
        case "yellow":
            toggleAnimation(".yellow");
            colorArray.push("yellow");
            break;
        case "blue":
            toggleAnimation(".blue");
            colorArray.push("blue");
            break;
        default:
            alert("Smth going wrong !");

    }
}

function toggleAnimation(className) {
    $(className).addClass("animated");
    setTimeout(function () {
        $(className).removeClass("animated");
    }, 400);
}

// Game Second Chapter

$(".btn").on("click", function () {

    if ($(this).attr("id") === colorArray[i - 1]) {
        playSound($(this).attr("id"));

    } else {
        wrongAudio.play();
        $("body").addClass("game-over");
        $("h1").text("Game Over");
        setTimeout(function () {
            i = 1;
            $("body").removeClass("game-over");
            $("h1").text("Press any key to start again");

        }, 1000);
    }

    i++;
    $("h1").text("Level " + i);
    continueGame();

});

function continueGame() {
    for (x = 0; x < i; x++) {
        animateDiv(createRandomColor());

    }
}

function playSound(nameOfButton) {

    switch (nameOfButton) {

        case "red":
            redAudio.play();
            break;
        case "green":
            greenAudio.play();
            break;
        case "blue":
            blueAudio.play();
            break;
        case "yellow":
            yellowAudio.play();
            break;
        default:
            alert("Smth going wrong !");

    }
}




