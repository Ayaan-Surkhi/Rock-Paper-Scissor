// Get DOM elements
const scissor = document.getElementById('scissor');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const players = document.querySelector('.players');
const choice1 = document.querySelector('.choice-1');
const choice2 = document.querySelector('.choice-2');
const win = document.querySelector('.win');

// Determine computer choice
const computerChoice = () => {
// Random integer
    const randomInt = Math.round(Math.random() * 12);

    if(randomInt >= 9 && randomInt !== (randomInt < 9)){
        choice2.textContent = 'Rock';
    }else if(randomInt >= 6 && randomInt < 9){
        choice2.textContent = 'Scissor';
    }else if(randomInt >= 3 && randomInt < 6){
        choice2.textContent = 'Paper';
    }        
}

// What to do if user wins
const userWins = () => {
    win.textContent = 'You win';
    win.style.display = 'grid';
}

// What to do if computer wins
const computerWins = () => {
    win.textContent = 'Computer wins';
    win.style.display = 'grid';
} 

const draw = () => {
    win.textContent = 'Draw';
    win.style.display = 'grid';
}

// Determine winner
const winner = () => {
    const userWinConditions = choice1.textContent === 'Scissor' && choice2.textContent === 'Paper' || choice1.textContent === 'Rock' && choice2.textContent === 'Scissor' || choice1.textContent === 'Paper' && choice2.textContent === 'Rock';
    const computerWinConditions = choice2.textContent === 'Scissor' && choice1.textContent === 'Paper' || choice2.textContent === 'Rock' && choice1.textContent === 'Scissor' || choice2.textContent === 'Paper' && choice1.textContent === 'Rock';
    const drawCondition = choice1.textContent === choice2.textContent;

    if(drawCondition){
        draw();
    }else if(userWinConditions){
     userWins(); 
    }else if(computerWinConditions){
     computerWins();
    }
}

scissor.addEventListener('click', (e) => {
choice1.textContent = 'Scissor';
players.style.marginRight = '40px';

computerChoice();
winner();
});

rock.addEventListener('click', (e) => {
    choice1.textContent = 'Rock';
    players.style.marginRight = '40px';

computerChoice();
winner();
});

paper.addEventListener('click', (e) => {
    choice1.textContent = 'Paper';
    players.style.marginRight = '40px';

computerChoice();
winner();
});