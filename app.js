const p1Btn = document.querySelector('#btn1');
const p2Btn = document.querySelector('#btn2');
const p1ScoreDisplay = document.querySelector('#player1Score');
const p2ScoreDisplay = document.querySelector('#player2Score');
const playingTo = document.querySelector('#playingTo');
const resetBtn=document.querySelector('#btn3');
let p1count = 0;
let p2count = 0;
let winCount = 7;

p1Btn.addEventListener('click', function () {
    if (p2count !== winCount) {
        if (p1count !== winCount) {
            p1count++;
            p1ScoreDisplay.innerText = p1count;
            if(p1count===winCount){
                p1ScoreDisplay.classList.add('winner');
                p2ScoreDisplay.classList.add('loser');
            }
        }

    }

});
p2Btn.addEventListener('click', function () {
    if (p1count !== winCount) {
        if (p2count !== winCount) {
            p2count++;
            p2ScoreDisplay.innerText = p2count;
            if(p2count===winCount){
                p2ScoreDisplay.classList.add('winner');
                p1ScoreDisplay.classList.add('loser');
            }
        }
    }

});
resetBtn.addEventListener('click',reset);
function reset(){
    p1ScoreDisplay.innerText=0;
    p1count=0;
    p2ScoreDisplay.innerText=0;
    p2count=0;
    p2ScoreDisplay.classList.remove('winner','loser');
    p1ScoreDisplay.classList.remove('winner','loser');
}

playingTo.addEventListener('change',function(){
    winCount=parseInt(this.value);
    reset();
})

