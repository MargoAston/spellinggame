import aList from "./List.js";

aList.init();

let yourScore = 0;
let theList = [];
let wordNum = 0;
let gamePhase = 1;
let theOptions = [];
let pattern = "";
let currWord = "";
let currOnset = "";
let currRime = "";
let clue = "";
let isInPhase = "true";

displayDropdown();


// Dynamically add a dropdown box with spelling pattern options
function displayDropdown() {
    theOptions = aList.setOptions();
    console.log("this is the list of options:", theOptions);

    var newSelect = document.createElement("select");
    newSelect.name = "currPattern";
    newSelect.id = "currPattern";
    

    for (const val of theOptions)
    {
        var newOption = document.createElement("option");
        newOption.value = val;
        newOption.text = val;
        newSelect.appendChild(newOption);
    }

    var newLabel = document.createElement("label");
    newLabel.innerHTML = "Choose a spelling pattern: ";
    newLabel.htmlFor = "currPattern";

    document.getElementById("spellingPatternOptions").appendChild(newLabel).appendChild(newSelect);
}



// Event listener  for 'start game' button
const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

function startGame(event) {
    gamePhase = 1;
    clearBoard();
    getList();
    setWordInfo(0);
    
    setGameBoard();       
}


function getList() {
    pattern = document.getElementById("currPattern").value;
    theList = aList.setList(pattern);
    wordNum = 0;
    
}

function getWordInfo(num) {
    let numb = parseInt(num);
    let wordInfo = [];
    switch (num) {
        case 0:
            wordInfo = theList.word1;
            break;
        case 1:
            wordInfo = theList.word2; 
            break;
        case 2:
            wordInfo = theList.word3;
            break;           
        case 3:
            wordInfo = theList.word4;
            break;
        case 4:
            wordInfo = theList.word5;    
    }

    return wordInfo;  
}


function setWordInfo(wordNum){
    let currentWordInfo = getWordInfo(wordNum);

    currWord = currentWordInfo[0];
    currOnset = currentWordInfo[1];
    currRime = currentWordInfo[2];
    clue = currentWordInfo[3];
}

function setGameBoard () {
    document.getElementById("icon-img").src = clue;
    const aWord = document.querySelector("#wordCheck");
    aWord.textContent = currWord;
    
    if (gamePhase == 1) {
        aWord.textContent = currWord;
    document.getElementById("onset").focus();
        document.getElementById("onset").value = currOnset;
        document.getElementById("rime").value = currRime;
        document.getElementById("targetPattern").style.backgroundColor = "#f5DEB3";
    
    } 
    else if (gamePhase == 2) {
        
        document.getElementById("onset").focus();
        document.getElementById("targetPattern").value = pattern;
        const phaseupdate = document.querySelector("#phaseNum");
        phaseupdate.textContent = "Step 2"; 

        // Hide original input boxes
       if (currOnset != "") {
        document.getElementById("onset").style.backgroundColor = "#f5DEB3";
       }
       if (currRime != "") {
        document.getElementById("rime").style.backgroundColor = "#f5DEB3";
       }
        
    }
    else if (gamePhase == 3) {
        document.getElementById("onset").focus();
        //Set game display to phase 3
        const phaseupdate = document.querySelector("#phaseNum");
        phaseupdate.textContent = "Step 3";
        //Hide input boxes for phase 1 & 2
        const targetPatternHide = document.getElementById("targetPattern");
        targetPatternHide.style.display = 'none';
        const rimeHide = document.getElementById("rime");
        rimeHide.style.display = 'none';
        //Add background color to onset box
        document.getElementById("onset").style.backgroundColor = "#f5DEB3";
    }
}


// Event listener  for 'nextWord' button
const nextWordButton = document.getElementById("nextWord");
nextWordButton.addEventListener("focus", nextWord); 

function nextWord() {  
    wordNum ++;
    clearBoard();

    if (wordNum > 4) {
        document.getElementById("icon-img").src = "images/flowershappyfaces.png";
        nextPhase();
    }
    else {
        console.log("in nextWord", wordNum);
        document.getElementById("targetPattern").value = "";
        setWordInfo(wordNum);

        setGameBoard();   
    }
    
};

function clearBoard() {
    //Clear onset box
    document.getElementById("onset").value = "";
    //Clear target spelling pattern box
    document.getElementById("targetPattern").value = "";
    //Clear rime box
    document.getElementById("rime").value = "";
    //Reset 'check it' box
    const word3 = document.querySelector("#front");
    word3.textContent = "check it";
    //Clear back of flip box card
    const clearWord = document.querySelector("#wordCheck");
    clearWord.textContent = "";
    //Set phase to phase 1
    const phaseupdate = document.querySelector("#phaseNum");
    phaseupdate.textContent = "Step 1";
    //Reset all box background colors to white
    document.getElementById("onset").style.backgroundColor = "white";
    document.getElementById("targetPattern").style.backgroundColor = "white";
    document.getElementById("rime").style.backgroundColor = "white";

};


// Event listener  for 'check it' flip box
const checkitButton = document.getElementById("checkit");
checkitButton.addEventListener("mouseenter", updateScore); 

//This function is under construction, does not yet appear in the game
function updateScore(event) {
    
    if(gamePhase == 1){
        const pattern = document.getElementById("currPattern").value;
        let userGuess = document.getElementById("targetPattern").value;

        if (userGuess == pattern) {
            yourScore ++;
        }
    }
};


function nextPhase() {
    gamePhase ++;
    console.log("in nextPhase:", gamePhase);
    if (gamePhase < 4) {
        wordNum = -1;
        setWordInfo(0);
        nextWord();

    }
    else {
        
        const word3 = document.querySelector("#front");
        word3.textContent = "Well Done";
       
        const onsetHide = document.getElementById("onset");
        onsetHide.style.display = 'none';

        const phaseHide = document.getElementById("phaseNum");
        phaseHide.style.display = 'none';

        const gameover = document.getElementById("nextWord").value = "game over";
         

        const phaseupdate = document.querySelector("#phaseNum");
        phaseupdate.textContent = "Game Over";
        
    }
    
}