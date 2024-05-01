// // // Function to generate a random addition problem
// function generateProblem() {
//     var num1 = Math.floor(Math.random() * 10) + 1;
//     var num2 = Math.floor(Math.random() * 10) + 1;
//     return { num1: num1, num2: num2, answer: num1 + num2 };
// }

// // Function to check the answer
// function checkAnswer() {
//     var userAnswer = parseInt(document.getElementById("answer").value);
//     if (userAnswer === currentProblem.answer) {
//         document.getElementById("result").innerHTML = "Correct! ";
//         document.getElementById("monkey").classList.add("clapping");
//         setTimeout(function() {
//             document.getElementById("monkey").classList.remove("clapping");
//         }, 500);
//     } else {
//         document.getElementById("result").innerHTML = "Incorrect. Try again!";
//     }
//     // Generate a new problem
//     currentProblem = generateProblem();
//     document.getElementById("problem").innerHTML = currentProblem.num1 + " + " + currentProblem.num2 + " = ";
//     document.getElementById("answer").value = "";
//     document.getElementById("answer").focus();
// }

// // Initialize the game
// var currentProblem = generateProblem();
// document.getElementById("problem").innerHTML = currentProblem.num1 + " + " + currentProblem.num2 + " = ";

// Function to generate a random addition problem
function generateProblem() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    return { num1: num1, num2: num2, answer: num1 + num2 };
}

// Function to check the answer
function checkAnswer() {
    var userAnswer = parseInt(document.getElementById("answer").value);
    if (userAnswer === currentProblem.answer) {
        document.getElementById("result").innerHTML = "Correct 🥳🥳🥳 !";
        moveCharacter();
    } else {
        document.getElementById("result").innerHTML = "Incorrect 🥺🥺🥺 Try again!";
    }
    // Generate a new problem
    currentProblem = generateProblem();
    document.getElementById("problem").innerHTML = currentProblem.num1 + " + " + currentProblem.num2 + " = ";
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

// Function to move the character
function moveCharacter() {
    var character = document.getElementById("character");
    character.style.animation = 'none';
    character.offsetHeight; /* trigger reflow */
    character.style.animation = null; 
    character.style.animation = 'moveCharacter 5s linear infinite';
}

// Initialize the game
var currentProblem = generateProblem();
document.getElementById("problem").innerHTML = currentProblem.num1 + " + " + currentProblem.num2 + " = ";
