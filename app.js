/**
 * Scoreboard Homework
 * @author 
 */


var runs = {};
var who = document.querySelector("team");
var inn = document.querySelector("inning");

for(let i = 1; i<9; i++){
    let a = "A" + i;
    let b = "B" + i;
    let nodeA = document.querySelector("#"+a);
    let nodeB = document.querySelector("#"+b);

    runs[a] = nodeA;
    runs[b] = nodeB;
}

function getBox() {
    return who.value + inn.value;
}

function plusRuns() {
    let box = getBox();
    let cur = runs[box].innerHTML;
    let n = parseInt(cur) + 1;
    runs[box].innerHTML = n;

}

// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");

// plus.addEventListener("onclick", () => {
//     let box = getBox();
//     console.log(box);
    
//     plusRuns();
// });