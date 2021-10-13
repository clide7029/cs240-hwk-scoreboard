/**
 * Scoreboard Homework
 * @author 
 */


var runs = {};
var runA = 0;
var runH = 0;

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

function updateRuns(box, op) {
    let team = box[0];
    box = team + '8';
    let cur = runs[box].innerHTML;
    let n;
    if(op){
        n = parseInt(cur) + 1;
    }else{
        n = parseInt(cur) - 1;
    }
    runs[box].innerHTML = n;
}

function plusRuns() {
    let box = getBox();
    let cur = runs[box].innerHTML;
    let n = parseInt(cur) + 1;
    runs[box].innerHTML = n;
    updateRuns(box, 1);
}

function minusRuns() {
    let box = getBox();
    let n = parseInt(runs[box].innerHTML) - 1;
    runs[box].innerHTML = n;
    updateRuns(box, 0);
}

function chickenSong() {
    var song = new Audio("./sounds/chickendance.mp3");
    song.play();
}