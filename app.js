/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
 let currentPlayer='X';
 let X =true ;
 let isgameover=false
 //let moveCount=0;


/*------------------------ Cached Element References ------------------------*/
const messageEl=document.querySelector('#message')

const square0El = document.querySelector('[id="0"]');
const square1El = document.querySelector('[id="1"]');
const square2El = document.querySelector('[id="2"]');
const square3El = document.querySelector('[id="3"]');
const square4El = document.querySelector('[id="4"]');
const square5El = document.querySelector('[id="5"]');
const square6El = document.querySelector('[id="6"]');
const square7El = document.querySelector('[id="7"]');
const square8El = document.querySelector('[id="8"]');


/*-------------------------------- Functions --------------------------------*/
messageEl.textContent=` Its ${currentPlayer} turn`


 //function playMove(squareEl){ 
    //if(squareEl.textContent!==""||gameOver){
       // return
    //}
    //if sqr not empty = game nit over= true + false =true 


    //squareEl.textContent=currentPlayer;
     //moveCount++;
     //checkWinner();
      //if(gameOver){
     // return
      //}
//}

//*----------------------------- Event Listeners -----------------------------*/
 square0El.addEventListener('click',()=>{
    if(square0El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square0El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }
    }
    messageEl.textContent=` Its ${currentPlayer} turn`
 })

  square1El.addEventListener('click',()=>{
    if(square1El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square1El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        } }
        messageEl.textContent=` Its ${currentPlayer} turn`
 })

  square2El.addEventListener('click',()=>{
      if(square2El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square2El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }}
   messageEl.textContent=` Its ${currentPlayer} turn`
 })
  square3El.addEventListener('click',()=>{
      if(square3El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square3El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }}
   messageEl.textContent=` Its ${currentPlayer} turn`
 })
  square4El.addEventListener('click',()=>{
      if(square4El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square4El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }}
   messageEl.textContent=` Its ${currentPlayer} turn`
 })

  square5El.addEventListener('click',()=>{
      if(square5El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square5El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }}
   messageEl.textContent=` Its ${currentPlayer} turn`
 })
  square6El.addEventListener('click',()=>{
      if(square6El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square6El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }}
   messageEl.textContent=` Its ${currentPlayer} turn`
 })
  square7El.addEventListener('click',()=>{
     if(square7El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square7El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }}
    messageEl.textContent=` Its ${currentPlayer} turn`
 })
  square8El.addEventListener('click',()=>{
      if(square8El.textContent!=='' || isgameover=== true){
        return 
    } else{
        square8El.textContent=currentPlayer
        if(currentPlayer==='X'){
            currentPlayer="O"
        }else{
            currentPlayer='X'
        }
    }
messageEl.textContent=` Its ${currentPlayer} turn`
 })