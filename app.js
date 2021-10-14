/**
 * Scoreboard Homework
 * @author Skyler Benjamin
 */



// object storing td elements from scoretable
var runs = {};

// total run counter for away team
var runA = 0;
// total run counter for home team
var runH = 0;

// select elements for team and inning
var who = document.getElementById("team");
var inn = document.getElementById("inning");

// dynamically create runs object with scoreboard elements
for (let i = 1; i < 9; i++) {
    let a = "A" + i;
    let h = "H" + i;
    // grab element nodes
    let nodeA = document.querySelector("#" + a);
    let nodeH = document.querySelector("#" + h);

    // put them in the runs object 
    runs[a] = nodeA;
    runs[h] = nodeH;
}

/* 
finds the scoreboard box currently selected by the two dropdown menus
@return STRING the id of selected box (ex. "A1")
 */
function getBox() {
    let w = who.value;
    let n = inn.value;
    return w + n;
}

/* 
update the total runs (R) column
@param box the id of selected box
@param op  whether to add or subtract a point
 */
function updateRuns(box, op) {
    // slice team out of box string
    let team = box[0];
    // make box id = 'A8' (runs total box)
    box = team + '8';

    let cur = runs[box].innerHTML;
    let n;

    // plus or minus
    if (op) {
        n = parseInt(cur) + 1;
    } else {
        n = parseInt(cur) - 1;
    }
    runs[box].innerHTML = n;
}

/* 
add a run to currently selected box
 */
function plusRuns() {
    // get box
    let box = getBox();
    // plus
    let n = parseInt(runs[box].innerHTML) + 1;
    //update
    runs[box].innerHTML = n;
    updateRuns(box, 1);
}

/* 
subtract a run from currently selected box
 */
function minusRuns() {
    // get box
    let box = getBox();
    // minus
    let n = parseInt(runs[box].innerHTML) - 1;
    // update unless score is negative
    if (n >= 0) {
        runs[box].innerHTML = n;
        updateRuns(box, 0);
    }
}


/* 
plays the chicken song and displays chicken image
 */
function chickenSong() {
    // play song
    var song = new Audio("./sounds/chickendance.mp3");
    song.play();

    // change image
    let img = document.getElementById("logo");
    img.src = "./images/sdchicken.jpg";

}

/* 
plays a random song and displays a random image
 */
function randomSong() {
    // random song
    let randS = Math.floor(Math.random() * 3);
    let song;
    if (randS == 0) {
        song = new Audio("./sounds/buildup.mp3");
    } else if (randS == 1) {
        song = new Audio("./sounds/charge1.mp3");
    } else if (randS == 2) {
        song = new Audio("./sounds/charge2.mp3");
    }
    song.play();

    // random image
    let randI = Math.floor(Math.random() * 3);
    let img = document.getElementById("logo");
    if (randI == 0) {
        img.src = "./images/megaphone.png";
    } else if (randI == 1) {
        img.src = "./images/sdchicken.jpg";
    } else if (randI == 2) {
        img.src = "./images/ups.png";
    }
}