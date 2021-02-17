const gameContainer = document.getElementById("game");
const restart = document.querySelector('.button2')
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let click = 0;
let firstClick = "";
let secondClick = "";
let gamepoints = 0;

function handleCardClick(event) {
  click++;

  if (click === 1) {
    event.target.style.backgroundColor = event.target.className.toString();
    color1 = event.target;
    // console.log(color1);
    firstClick = event.target.className.toString();
  } else if (click === 2) {
    event.target.style.backgroundColor = event.target.className.toString();
    color2 = event.target;
    secondClick = event.target.className.toString();
  } else {
    click = 0;
  }
  if (firstClick !== "" && secondClick !== "") {
    if (firstClick !== secondClick) {
      setTimeout(function () {
        firstClick = "";
        secondClick = "";
        color1.style.backgroundColor = "";
        color2.style.backgroundColor = "";
        click = 0;
      }, 1000);
    } else {
      firstClick = "";
      secondClick = "";
      click = 0;
      gamepoints += 2;
    }
  }
  if (gamepoints === 10) {
    alert("GREAT STUFF!! WANT TO TRY AGAIN ?");
  }
}


createDivsForColors(shuffledColors);
restart.addEventListener("click", function () {
  location.reload();
});