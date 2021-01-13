let words = ['hangman', 'laborchart', 'consequences', 'google', 'tesla', 'california', 'github', 'programming', 'python', 'javascript'];
let w = words[Math.round(Math.random() * (words.length - 1))];
let guess = [];
for (let i = 0; i < w.length; i++) {
    guess.push('_');
}
let guessLeft = w.length;
console.log(guess.join(' '));

while (guessLeft && guess.includes('_')) {
    let g = prompt('Guess a letter: ');
    is_correct = w.includes(g);
    console.log('You guessed: ' + g);
    
    if (is_correct) {
        console.log('%c Correct guess!', 'color: green');
    } else {
        console.log('%c Wrong guess.', 'color: red');
    }

    for (let i = 0; i < w.length; i++) {
        if (w[i] === g) {
            guess[i] = g;
        }
    }
    console.log(guess.join(' '));
    guessLeft--;
}

if (guess.includes('_')) {
    console.log('%c Sorry, you did not finish the Hangman.', 'background: red');
    console.log('The word is:', w);
} else {
    console.log('%c You win. Congrats!', 'background: green');
}