const calculateSumButtonElement = document.querySelector("#caculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;
}

let sumUpToNumber = 0;
for (let i = 0; i <= enteredNumber; i++) {
  sumUpToNumber += i;
}

calculateSumButtonElement.addEventListener("click", calculateSum);

//Highlight links

const highlightLinksButtonElement = document.querySelecotr('#highlight-links button');

function highlightLinks(){
    const anchorElements = document.querySelectorAll('');
for(const anchorElement of anchorElements){
    anchorElement.classList.add('highlight');
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

//Display user data
const dummyUserData = {
    firstName: 'Max',
    lastName: 'Kim',
    age:32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data')
    
    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUppderCase() +':' + dummyUserData[key];
        newUserDataListItemElement.textContext = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
};

displayUserDataButtonElement.addEventListener('click', displayUserData);

//statistics //Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {

return Math.floor(Math.random()*6)+1;

}

function deriveNumberOfDiceRools(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRoolsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRoolsListElement.innerHTML = '';

    let hasRooledTargetNumber = false;

    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
       

        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll'+numberOfRolls+':' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        has

    }
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);