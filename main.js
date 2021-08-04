let goBtn = document.getElementById("go");
let choicesBtns = document.getElementById("choices");
let regBtn = document.getElementById("reg");
let ranBtn = document.getElementById("ran");
let quesBtns = document.getElementById("ques");
let text = document.getElementById("text");
let textInput = document.getElementById("ans");
let checkBtn = document.getElementById("check");
let timer = document.getElementById("timer");
let timing = 0;
let questions = ["2 X 2 =", "2 X 3 =", "2 X 4 =", "2 X 5 =", "2 X 6 =", "2 X 7 =", "2 X 8 =", "2 X 9 =", "2 X 10 =",
    "3 X 3 =", "3 X 4 =", "3 X 5 =", "3 X 6 =", "3 X 7 =", "3 X 8 =", "3 X 9 =", "3 X 10 ="
    , "4 X 4 =", "4 X 5 =", "4 X 6 =", "4 X 7 =", "4 X 8 =", "4 X 9 =", "4 X 10 ="
    , "5 X 5 =", "5 X 6 =", "5 X 7 =", "5 X 8 =", "5 X 9 =", "5 X 10 ="
    , "6 X 6 =", "6 X 7 =", "6 X 8 =", "6 X 9 =", "6 X 10 ="
    , "7 X 7 =", "7 X 8 =", "7 X 9 =", "7 X 10 ="
    , "8 X 8 =", "8 X 9 =", "8 X 10 ="
    , "9 X 9 =", "9 X 10 ="
    ,"10 X 10 ="];
let answers = [2 * 2, 2 * 3, 2 * 4, 2 * 5, 2 * 6, 2 * 7, 2 * 8, 2 * 9, 2 * 10
    , 3 * 3, 3 * 4, 3 * 5, 3 * 6, 3 * 7, 3 * 8, 3 * 9, 3 * 10
    , 4 * 4, 4 * 5, 4 * 6, 4 * 7, 4 * 8, 4 * 9, 4 * 10
    , 5 * 5, 5 * 6, 5 * 7, 5 * 8, 5 * 9, 5 * 10
    , 6 * 6, 6 * 7, 6 * 8, 6 * 9, 6 * 10
    , 7 * 7, 7 * 8, 7 * 9, 7 * 10
    , 8 * 8, 8 * 9, 8 * 10
    , 9 * 9, 9 * 10
    , 10 * 10];
let randomNums = [1, 2, 3, 4, 5] 
let i = 0;
let canTime = 1;



setInterval(() => {
    if (canTime == 0) {
        timing += .2;
        timer.innerHTML = timing.toFixed(1) + "s";
    }
}, 200);

text.innerHTML = questions[i]

goBtn.onclick = function () {
    choicesBtns.style.display = "flex"
    goBtn.style.display = "none"
};

regBtn.onclick = function () {
    quesBtns.style.display = "flex"
    choicesBtns.style.display = "none"
    canTime = 0;
};

ranBtn.onclick = function () {
    quesBtns.style.display = "flex"
    choicesBtns.style.display = "none"
    canTime = 0;
};

checkBtn.onclick = function () {
    if (textInput.value == answers[i]) {
        if (i != questions.length - 1) {
            i++
        } else {
            document.write(`<div style="background-color: greenyellow; padding: 10px; border-radius: 10px; font-size: 40px; line-height: 1.8; font-family: Arial, Helvetica, sans-serif; font-weight: bold; text-align: center;">You Finished in ${(timing.toFixed(1) / 60).toFixed(2)}min / ${timing.toFixed(1)}s</div>`)
        }
        text.innerHTML = questions[i]
        textInput.value = ""
    } else {
        textInput.value = "" 
    }
}

window.addEventListener("keydown", keypress, false);

function keypress(key) {
    if (key.keyCode == "13" || key.keyCode == "32") {
        if (textInput.value == answers[i]) {
            if (i != questions.length - 1) {
                i++
            } else {
                document.write(`<div style="background-color: greenyellow; padding: 10px; border-radius: 10px; font-size: 40px; line-height: 1.8; font-family: Arial, Helvetica, sans-serif; font-weight: bold; text-align: center;">You Finished in ${(timing.toFixed(1) / 60).toFixed(2)}min / ${timing.toFixed(1)}s</div>`)
            }
            text.innerHTML = questions[i]
            textInput.value = ""
        } else {
            textInput.value = "" 
        }
    }
}