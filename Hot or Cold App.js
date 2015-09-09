var guess = undefined;
var number = (Math.floor((Math.random() * 100) + 1));
var numGuess = 0;
var guessArr = [];
function newGame(){
  number = (Math.floor((Math.random() * 100) + 1));
}
function submit(guess){
    if(guess === number){
        return console.log('you got it');
    }
    else if(guess===undefined){
        console.log('Guess a number');
    }
    else if (Math.abs(number - guess)>=50){
        numGuess =numGuess+1;
        guessArr.push(guess);
        console.log('Ice Cold. Guess Number '+ numGuess+". Numbers guessed so far are "+guessArr);
    }
    else if (Math.abs(number - guess)<50 && (Math.abs(number - guess)>=30)) {
        numGuess =numGuess+1;
        guessArr.push(guess);
        console.log('Cold. Guess Number '+ numGuess+". Numbers guessed so far are "+guessArr);
    }
    else if (Math.abs(number - guess)<30 && (Math.abs(number - guess)>=20)) {
        numGuess =numGuess+1;
        guessArr.push(guess);
        console.log('Warm. Guess Number '+ numGuess+". Numbers guessed so far are "+guessArr);
    }
    else if (Math.abs(number - guess)<20 && (Math.abs(number - guess)>=10)) {
        numGuess =numGuess+1;
        guessArr.push(guess);
        console.log('Hot. Guess Number '+ numGuess+". Numbers guessed so far are "+guessArr);
    }
    else if (Math.abs(number - guess)<10 && (Math.abs(number - guess)>=1)) {
        numGuess =numGuess+1;
        guessArr.push(guess);
        console.log('Very Hot. Guess Number '+ numGuess+". Numbers guessed so far are "+guessArr);
    }

}


