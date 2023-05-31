console.log('Welcome to tic tac to');
let music = new Audio('music.mp3');
let audioturn = new Audio ('ting.mp3');
let gameover = new Audio('gameover.mp3');
let Turn ="X";
let thisgame = false;
let reset = document.getElementById('result')


// Function to change the turn
const changeTurn = ()=>{
    return Turn === "X"?"0":"X"
}
  

// Function to check to win
const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+'Won'
            thisgame=true
            // document.querySelector('.imgif').getElementsByTagName('img').style.width='200px';
            document.querySelector('.imgif').getElementsByTagName('img')[0].style.width='200px'
        } 
    })

}

//  Game logic
let box = document.getElementsByClassName('box');
Array.from(box).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn=changeTurn();
            audioturn.play();
            checkwin();
            if(!thisgame){
                document.getElementsByClassName('info')[0].innerText = 'Turn for' +Turn;
            }
            
        }
    })
})

// Write a logic for reset btn
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
        Turn ="X"
        thisgame=false;
        document.getElementsByClassName('info')[0].innerText='Turn for'+Turn;
        document.querySelector('.imgif').getElementsByTagName('img')[0].style.width='0px';
    });
})
