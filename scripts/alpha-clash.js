// function play(){
//   // hide the screen
//   // show the playground
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
// //   console.log(homeSection.classList);

// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList);
// }
function handleKeyboardButtonPress(event){
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);


  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log( playerPressed, expectedAlphabet);

  if(playerPressed === expectedAlphabet){
    console.log('you get a point');


    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(typeof currentScore);

    const newScore = currentScore + 1;
    console.log(newScore);

    currentScoreElement.innerText = newScore;




    console.log('you have press correctly ', expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('you missed and you lost a life');

    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);

    const newLife = currentLife-1;
    console.log(newLife);

    currentLifeElement.innerText = newLife;


    if(newLife === 0){
      gameOver();
    }


  }
}

document.addEventListener('keyup', handleKeyboardButtonPress)








function continueGame(){
  const alphabet = getARandomalphabet();
  // console.log('Your random alphabet :', alphabet);

  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;


  setBackgroundColorById(alphabet);

}

function play(){
  hideElementById('home-screen')
  hideElementById('final-score')
  showElementById('play-ground')

setTextElementValueById


  continueGame()
}


function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
}