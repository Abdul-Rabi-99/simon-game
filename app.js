let gameseq = [];
let userseq = [];
let btns = ["red", "purple", "yellow", "blue"]
let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started === false){
        console.log("game is start");
    started = true;
    }
    levelUp();
});

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level: ${level}`;
    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);

    flashup(randombtn);
    
}

function flashup(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}


function buttonpress() {
    let btn = this;
    userflash(btn);

    // usercolor = btn.getAttribute("id");
    usercolor = btn.getAttribute("id");

    userseq.push(usercolor);
    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", buttonpress); // pass reference, don't invoke
}
function checkAns() {
    for (let idx = 0; idx < userseq.length; idx++) {
        if (userseq[idx] !== gameseq[idx]) {
            h2.innerHTML = `Game over,<B>your score is ${level}</b> <br> press again to start`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(() => {
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            reset();
            return; // Exit the function early if there's a mismatch
        }
    }

    // If all elements matched up to this point, and the lengths are equal
    if (userseq.length === gameseq.length) {
        setTimeout(levelUp, 1000);
    }
    console.log("Values are the same");
}

// function checkAns (idx){
    

//     if(userseq[idx] === gameseq[idx]){
//         if(userseq.length == gameseq.length){
//             setTimeout(levelUp, 1000);
//         }
//         console.log("value same");

//     }else{
//         h2.innerText = "game over,  press again to start";
//         reset();
//     }
// }

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}































