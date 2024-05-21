const rockInput = document.querySelector("#rock");
const paperInput = document.querySelector("#paper");
const scissorsInput = document.querySelector("#scissors");

const resultContainer = document.querySelector('#result-container');

const elements = [
    { name: "rock",url: "assets/rock.svg" },
    { name: "paper", url: "assets/paper.svg" },
    { name: "scissors", url: "assets/scissors.svg" }
];


rockInput.addEventListener('click', () => {
    const rock = rockInput.value;
    jokenpo(rock);
});

paperInput.addEventListener('click', () => {
    const paper = paperInput.value;
    jokenpo(paper);
});

scissorsInput.addEventListener('click', () => {
    const scissors = scissorsInput.value;
    jokenpo(scissors);
});


function enemy() {
    const element = Math.floor(Math.random() * 3);
    
    if(element === 1) 
        return "rock";
    else if (element === 2)
        return "paper";
    else 
        return "scissors";

}


function jokenpo(element) {

    const enemyElement = enemy();
    showEnemyElement(enemyElement);

    switch(element) {
        case 'rock':
            if (enemyElement === "scissors"){
                resultBattle("you win!");
            } else if (enemyElement === "rock"){
                resultBattle("Try again!");
            } else {
                resultBattle("you lose!");
            }
            break;

        case 'paper':
            if (enemyElement === "rock") {
                resultBattle("you win!");
            } else if (enemyElement === "paper") {
                resultBattle("Try again!");
            } else {
                resultBattle("you lose!");
            }
            break;
        
        case 'scissors':
            if (enemyElement === "paper") {
                resultBattle("you win!");
            } else if (enemyElement === "scissors"){
                resultBattle("Try again!");
            } else {
                resultBattle("you lose!");
            }
            break;
    }

}

function showEnemyElement(element) {

    resultContainer.innerHTML = "";

    const searchElement = elements.find(item => item.name === element);
    const show = `<p>Enemy element:</p><img src="${searchElement.url}"><p>${searchElement.name}</p>`;

    const imgEnemy = document.createElement('aside');
    imgEnemy.classList = 'show-result';
    imgEnemy.innerHTML = show;

    resultContainer.appendChild(imgEnemy);
}

function resultBattle(result) {
    const finalResult = document.createElement('aside');
    finalResult.classList = 'result';
    finalResult.innerHTML = `<p>${result}</p>`;

    if(result === "you win!" ) {
        finalResult.style.background = "#b4fcab";
    } else if (result === "Try again!") {
        finalResult.style.background = "#f3e2b1";
    } else {
        finalResult.style.background = "#f3b4b1";
    }

    resultContainer.appendChild(finalResult);
}

