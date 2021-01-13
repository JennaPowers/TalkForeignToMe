
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
        right +=1;
        
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
    //img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
}

function showWrongImage() {
    var img = document.getElementById('x')
  //  img.src = sourceOfPicture.replace('90x90', '225x225');
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

// FRENCH VOCAB DATA

questions = [
    {
        question: "Type in the English translation...",
        word: "femme",
        answer: "woman",
        regex: /woman/
    },
    {
        question: "Type in the English translation...",
        word: "bonjour",
        answer: "hello, good morning",
        regex: /hello|good morning|hey|hi/
    },
    {
        question: "Type in the English translation...",
        word: "amour",
        answer: "love",
        regex: /love/
    },
    {
        question: "Type in the English translation...",
        word: "bonsoir",
        answer: "good evening",
        regex: /good evening|good night/
    },
    {
        question: "Type in the English translation...",
        word: "monde",
        answer: "world",
        regex: /world/
    },
    {
        question: "Type in the English translation...",
        word: "année",
        answer: "year",
        regex: /year/
    },
    {
        question: "Type in the English translation...",
        word: "bonheur",
        answer: "happiness",
        regex: /happiness|happy/
    },
    {
        question: "Type in the English translation...",
        word: "infirmière",
        answer: "nurse",
        regex: /nurse/
    },
    {
        question: "Type in the English translation...",
        word: "homme",
        answer: "man",
        regex: /man/
    },
    {
        question: "Type in the English translation...",
        word: "gauche",
        answer: "left",
        regex: /left/
    },
    {
        question: "Type in the English translation...",
        word: "nuit",
        answer: "night",
        regex: /night/
    },
    {
        question: "Type in the English translation...",
        word: "poisson",
        answer: "fish",
        regex: /fish/
    },
    {
        question: "Type in the English translation...",
        word: "bois",
        answer: "wood",
        regex: /wood/
    },
    {
        question: "Type in the English translation...",
        word: "deuxième",
        answer: "second",
        regex: /second/
    },
    {
        question: "Type in the English translation...",
        word: "chanson",
        answer: "song",
        regex: /song/
    },
    {
        question: "Type in the English translation...",
        word: "rue",
        answer: "king",
        regex: /king/
    },
    {
        question: "Type in the English translation...",
        word: "bateau",
        answer: "boat",
        regex: /boat/
    },
    {
        question: "Type in the English translation...",
        word: "tôt",
        answer: "early",
        regex: /early/
    },
    {
        question: "Type in the English translation...",
        word: "croire",
        answer: "believe",
        regex: /believe/
    },
    {
        question: "Type in the English translation...",
        word: "sommeil",
        answer: "sleep",
        regex: /sleep/
    },
    {
        question: "Type in the English translation...",
        word: "papillon",
        answer: "butterfly",
        regex: /butterfly/
    },
    {
        question: "Type in the English translation...",
        word: "parapluie",
        answer: "umbrella",
        regex: /umbrella/
    },
    {
        question: "Type in the English translation...",
        word: "pleuvoir",
        answer: "to rain",
        regex: /(to)?\W*rain/
    },
    {
        question: "Type in the English translation...",
        word: "doux",
        answer: "soft",
        regex: /soft/
    },
    {
        question: "Type in the English translation...",
        word: "chaussettes",
        answer: "socks",
        regex: /sock(s)?/
    },
    {
        question: "Type in the English translation...",
        word: "plonger",
        answer: "to dive",
        regex: /(to)?\W*dive/
    },
    {
        question: "Type in the English translation...",
        word: "feuilles",
        answer: "leaves",
        regex: /leaves|leaf/
    },
    {
        question: "Type in the English translation...",
        word: "sommeil",
        answer: "sleep",
        regex: /sleep/
    },
    {
        question: "Type in the English translation...",
        word: "ordinateur",
        answer: "computer",
        regex: /computer/
    },
    {
        question: "Type in the English translation...",
        word: "supermarché",
        answer: "supermarket",
        regex: /(super)?market|grocery store/
    },
];
