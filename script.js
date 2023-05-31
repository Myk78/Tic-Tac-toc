console.log('Welcome to tic tac to');
let music = new Audio('music.mp3');
let audioturn = new Audio ('ting.mp3');
let gameover = new Audio('gamover.mp3');
let turn ="X";
let thisgame = false;


// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
  

// Function to check to win
const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText1!=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+'Won'
            thisgame=true
        }
    })

}

//  Game logic
let box = document.getElementsByClassName('box');
Array.from(box).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() =>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkwin();
            if(!thisgame){
                document.getElementsByClassName('info')[0].innerText= 'Turn for'+turn;
            }
            
        }
    })
})