/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
 let currentPlayer='X'
 //let gameOver=false
 //let moveCount=0


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
   // if(squareEl.textContent!==""||gameOver){
      //  return

    //}
    //squareEl.textContent=`${currentPlayer}'

 //}

//*----------------------------- Event Listeners -----------------------------*/
 square0El.addEventListener('click',()=>{
    square0El.textContent=currentPlayer
 })

  square1El.addEventListener('click',()=>{
    square1El.textContent=currentPlayer
 })

  square2El.addEventListener('click',()=>{
    square2El.textContent=currentPlayer
 })
  square3El.addEventListener('click',()=>{
    square3El.textContent=currentPlayer
 })
  square4El.addEventListener('click',()=>{
    square4El.textContent=currentPlayer
 })

  square5El.addEventListener('click',()=>{
    square5El.textContent=currentPlayer
 })
  square6El.addEventListener('click',()=>{
    square6El.textContent=currentPlayer
 })
  square7El.addEventListener('click',()=>{
    square7El.textContent=currentPlayer
 })
  square8El.addEventListener('click',()=>{
    square8El.textContent=currentPlayer
 })