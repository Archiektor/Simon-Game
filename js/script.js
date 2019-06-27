// console.log("script here!");
let i = 1;
let colorArray;

let blueAudio = new Audio('sounds/blue.mp3');
let greenAudio = new Audio('sounds/green.mp3');
let redAudio = new Audio('sounds/red.mp3');
let yellowAudio = new Audio('sounds/yellow.mp3');
let wrongAudio = new Audio('sounds/wrong.mp3');

// Game Starting Chapter

startGame();

function startGame() {
    $(document).keypress(function () {

        // let randomNumber = Math.floor(Math.random() * 4);
        colorArray = [];

        $("h1").text("Level " + i);
        animateDiv(createRandomNumber());
    });
}

function continueGame() {
    animateDiv(createRandomNumber());
}

function createRandomNumber() {
    return Math.floor(Math.random() * 4);
}

function animateDiv(number) {
    // let randomNumber = Math.floor(Math.random() * 4);

    switch (number) {

        case 0:
            toggleAnimation(".green");
            colorArray.push("green");
            break;
        case 1:
            toggleAnimation(".red");
            colorArray.push("red");
            break;
        case 2:
            toggleAnimation(".yellow");
            colorArray.push("yellow");
            break;
        case 3:
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
        i++;
        $("h1").text("Level " + i);
        continueGame();
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
});

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




