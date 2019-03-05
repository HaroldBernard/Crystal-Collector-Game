var wins = 0;
var losses = 0;
var numbOptions = [2, 3, 7, 11];
var counter = 0
var crystalBtn = $("button")
var totalScore = $(".totalScore");
var winner = $(".winner");
var loser = $(".loser");

//sets up start of the game with 0 wins, 0 losses,
winner.text(wins);
loser.text(losses);

//computer randomly selects a number between 28 and 83 then places that number within the html at randNum div
var crystalNumb = Math.floor(Math.random() * 55) + 28;
$(".randNum").text(crystalNumb);

function reset() {
    numbOptions = [2, 3, 7, 11];
    counter = 0;
    totalScore.text(counter);
    var crystalNumb = Math.floor(Math.random() * 55) + 28;
    $(".randNum").text(crystalNumb);
}

//takes random number for array, uses it, then removes it from aray
function randnum() {
    var rand = Math.floor(Math.random() * numbOptions.length);
    var selected = numbOptions[rand];
    numbOptions.splice(rand, 1)
    return selected;
}

//computer randomly assigns a number to a crystal
function newNumber() {
    $(".crystal1").attr("data-crystalvalue", randnum());
    $(".crystal2").attr("data-crystalvalue", randnum());
    $(".crystal3").attr("data-crystalvalue", randnum());
    $(".crystal4").attr("data-crystalvalue", randnum());
    //crystalBtn.attr('data-crystalvalue', numbOptions[i])
}
newNumber();

//onclick function that adds value of clicked crystal to the counter score and resets inputs
function game() {
    crystalBtn.on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        totalScore.text(counter);
        $(this).css("background-color", "midnightblue");

        if (counter === crystalNumb) {
            alert("You Win!!! Click ok to collect more crystals");
            wins++;
            winner.text(wins);
            crystalBtn.css("background-color", "whitesmoke");
            newNumber();
            reset()
        }
        else if (counter > crystalNumb) {
            alert("You lose! You collected too many and cannot carry them all. click ok to try again");
            losses++;
            loser.text(losses);
            crystalBtn.css("background-color", "whitesmoke");
            newNumber()
            reset()
        }
    })

}
game()