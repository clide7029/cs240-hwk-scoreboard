/**
 * Scoreboard Homework
 * @author 
 */


var runs = {};
// var who = document.querySelector("team");
// var inn = document.querySelector("inning");

for (let i = 1; i < 9; i++) {
    let a = "A" + i;
    let h = "H" + i;
    let nodeA = document.querySelector("#" + a);
    let nodeH = document.querySelector("#" + h);

    runs[a] = nodeA;
    runs[h] = nodeH;
}

function getBox() {
    let who = document.getElementById("team").value;
    let inn = document.getElementById("inning").value;
    console.log(who + inn);
    return who + inn;
}

function plusRuns() {
    let box = getBox();
    let cur = runs[box].innerHTML;
    let n = parseInt(cur) + 1;
    runs[box].innerHTML = n;
}

function minusRuns() {
    let box = getBox();
    let cur = runs[box].innerHTML;
    let n = parseInt(cur) - 1;
    runs[box].innerHTML = n;
}

// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");

// plus.addEventListener("onclick", () => {
//     let box = getBox();
//     console.log(box);

//     plusRuns();
// });