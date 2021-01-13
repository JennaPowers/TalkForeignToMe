const checkButton = document.getElementById("checkButton");
let currentQuestionIndex = 0;
let usedIndexes = [0];

// Tallys
let right = 0;
let total = 0;

//Wrong answers to display
const wrongAnswers = [];

// Check Answer method

function checkAnswer() {
    const userInput = document.getElementById('answer').value;
    if (questions[currentQuestionIndex].regex.test(userInput.toLowerCase())) {
        showCorrectImage()
        right += 1;
        
    } else {
        showWrongImage()
        const sol = document.getElementById("solution");
        sol.style.display = "block";
        sol.innerHTML = "Correct answer: " + questions[currentQuestionIndex].answer;
        wrongAnswers.push(parseInt(currentQuestionIndex));
    }
    total += 1;
    localStorage.setItem("missedWordsList", wrongAnswers);
}

// Next Button

function handleNextButton() {
    const sol = document.getElementById("solution");
    const check = document.getElementById("check");
    const x = document.getElementById("x");
    const textField = document.getElementById("answer");
    if (sol.style.display == "block") {
        sol.style.display = "none";
    }
    if (check.style.display == "block") {
        check.style.display = "none";
    }
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    
    // Clear text field
    textField.value = "";

    // Change index
    let index = Math.floor(Math.random() * questions.length);
    while (usedIndexes.includes(index)) {
        index = Math.floor(Math.random() * questions.length);
    }
    currentQuestionIndex = index;
    usedIndexes.push(currentQuestionIndex);

    // Change prompt
    const prompt = document.getElementById("prompt");
    prompt.innerHTML = questions[currentQuestionIndex].question;

    // Change word
    const word = document.getElementById("word");
    word.innerHTML = questions[currentQuestionIndex].word;
}

// Display checkmark or 'X'

function showCorrectImage() {
    var img = document.getElementById('check')
    img.style.display = "block";
}

function showWrongImage() {
    var img = document.getElementById('x')
    img.style.display = "block";
}

// Exit button
function displayResults() {
    var flexBox = document.getElementById('question');
    var nextBtn = document.getElementById('next-btn');
    var exitBtn = document.getElementById('exit');
    var imgX = document.getElementById('x');
    var imgCheck = document.getElementById('check');
    var sol = document.getElementById('solution');
    flexBox.style.display = "none";
    nextBtn.style.display = "none";
    exitBtn.style.display = "none";
    imgX.style.display = "none";
    imgCheck.style.display = "none";
    sol.style.display = "none";


    let percentage = Math.round((right / total) * 100);
    if (isNaN(percentage)) {
         percentage = 0;
    }
    var results = document.getElementById('bye');
    results.style.display = "block";
    results.innerHTML = "Today's fluency: " + percentage + "%";

    var missedWords = document.getElementById('missedWords');
    missedWords.style.display = "block";
}

// Display missed words
function displayMW() {
    let x = localStorage.getItem('missedWordsList');
    x = x.split(',');
    let z = [];
    for (var i = 0; i < x.length; ++i) {
        z.push(parseInt(x[i]));
    }
    var str = '<ul id="elements">';
    for (let i = 0; i < x.length; ++i) {
        str += '<li class="word">' + '<b>' +questions[z[i]].word + '</b>' + ' - ' + questions[z[i]].answer + '</li>';
    }
      str += '</ul>';
      document.getElementById("listOfWords").innerHTML = str;
}

// RUSSIAN VOCAB DATA

questions = [
    {
        question: "Type in the English translation...",
        word: "sorridere",
        answer: "smile",
        regex: /smile/
    },
    {
        question: "Type in the English translation...",
        word: "Grazie",
        answer: "thank you",
        regex: /thank you|thanks/
    },
    {
        question: "Type in the English translation...",
        word: "Arrivederci",
        answer: "good bye",
        regex: /good bye|bye/
    },
    {
        question: "Type in the English translation...",
        word: "credere",
        answer: "believe",
        regex: /believe/
    },
    {
        question: "Type in the English translation...",
        word: "pettinare",
        answer: "comb",
        regex: /comb/
    },
    {
        question: "Type in the English translation...",
        word: "lamentarsi",
        answer: "complain",
        regex: /complain/
    },
    {
        question: "Type in the English translation...",
        word: "cadere",
        answer: "to fall",
        regex: /(to)?\W*fall/
    },
    {
        question: "Type in the English translation...",
        word: "imparare",
        answer: "to learn",
        regex: /(to)?\W*learn/
    },
    {
        question: "Type in the English translation...",
        word: "svegliarsi",
        answer: "wake up",
        regex: /(to)?\W*wake up|wake|awake/
    },
    {
        question: "Type in the English translation...",
        word: "viaggiare",
        answer: "to travel",
        regex: /(to)?\W*travel/
    },
    {
        question: "Type in the English translation...",
        word: "diritto",
        answer: "right",
        regex: /right/
    },
    {
        question: "Type in the English translation...",
        word: "giorno",
        answer: "day",
        regex: /(a)?\W*day/
    },
    {
        question: "Type in the English translation...",
        word: "dovrebbe",
        answer: "should",
        regex: /should/
    },
    {
        question: "Type in the English translation...",
        word: "cibo",
        answer: "food",
        regex: /food/
    },
    {
        question: "Type in the English translation...",
        word: "città",
        answer: "city",
        regex: /city/
    },
    {
        question: "Type in the English translation...",
        word: "lontano",
        answer: "far",
        regex: /far/
    },
    {
        question: "Type in the English translation...",
        word: "pochi",
        answer: "few",
        regex: /few/
    },
    {
        question: "Type in the English translation...",
        word: "piccola",
        answer: "little",
        regex: /little/
    },
    {
        question: "Type in the English translation...",
        word: "carta",
        answer: "paper",
        regex: /paper/
    },
    {
        question: "Type in the English translation...",
        word: "pianura",
        answer: "plain",
        regex: /plain/
    },
    {
        question: "Type in the English translation...",
        word: "cane",
        answer: "dog",
        regex: /dog/
    },
    {
        question: "Type in the English translation...",
        word: "ora",
        answer: "now",
        regex: /now/
    },
    {
        question: "Type in the English translation...",
        word: "uomo",
        answer: "man",
        regex: /man/
    },
    {
        question: "Type in the English translation...",
        word: "libbra",
        answer: "pound",
        regex: /pound/
    },
    {
        question: "Type in the English translation...",
        word: "spazio",
        answer: "space",
        regex: /space/
    },
    {
        question: "Type in the English translation...",
        word: "mattina",
        answer: "morning",
        regex: /(the)?\W*morning/
    },
    {
        question: "Type in the English translation...",
        word: "desiderio",
        answer: "to wish",
        regex: /(to)\W*wish/
    },
    {
        question: "Type in the English translation...",
        word: "flusso",
        answer: "flow",
        regex: /(to)?flow/
    },
    {
        question: "Type in the English translation...",
        word: "forte",
        answer: "loud",
        regex: /loud|noisy/
    },
    {
        question: "Type in the English translation...",
        word: "radice",
        answer: "root",
        regex: /root/
    }

];
