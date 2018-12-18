const guessField =
      document.querySelector('.guessField');
const guessSubmit =
      document.querySelector('.guessSubmit');

const guesses =
      document.querySelector('.guesses');
const lastResult =
      document.querySelector('.lastResult');
const lowOrHigh =
      document.querySelector('.lowOrHigh');
const startAgain =
      document.querySelector('.startAgain');

let guessCount = 1;
let randomNumber = Math.floor(Math.random() *100) + 1;
startAgain.style.visibility = 'hidden';

const checkGuess = () => {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: ';
    }

    guesses.textContent += `${userGuess} `;

    //kui kasutaja pakub õigesti
    if(userGuess === randomNumber){
        lastResult.textContent = 'Õige vastus';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        document.getElementById("startAgain").style.visibility = 'visible';
    } 
    //Kui kasutaja pakub 10 korda valesti
    else if (guessCount === 10){
        lowOrHigh.textContent = '';
        lastResult.textContent = 'Sa kaotasid';
        document.getElementById("lars420").disabled = true;
        document.getElementById("guessField").disabled = true;
        document.getElementById("startAgain").style.visibility = 'visible';
    } else {
        lastResult.textContent = 'Vale vastus';
        lastResult.style.backgroundColor = 'red';
        const lowOrHighText = 'Viimane pakkumine oli liiga ';
        // kui number on liiga madal
        if(userGuess < randomNumber){
            lowOrHigh.textContent = lowOrHighText + 'madal';
            //kui number on liiga suur       
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'kõrge';    
        }       
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click',checkGuess);