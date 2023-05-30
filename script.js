console.log('Welcome to tic tac to');
let music = new Audio('music.mp3');
let audioturn = new Audio ('ting.mp3');
let gameover = new Audio('gamover.mp3');
let turn ="X";


// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
 

// Function to check to win
const checkwin =()=>{

}

//  Game logic
let box = document.getElementsByClassName('box');
Array.from(box).forEach(element =>{
    let boxtext = element.querySelector('boxtext');
    element.addEventListener('click',() =>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            changeTurn();
            audioturn.play();
            checkwin();
            document.getElementsByClassName('info')[0].innerText= 'Turn for'+turn;
        }
    })
})