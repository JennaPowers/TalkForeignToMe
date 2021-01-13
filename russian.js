
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
        word: "Привет",
        answer: "hello",
        regex: /hey|hi|hello/
    },
    {
        question: "Type in the English translation...",
        word: "любовь",
        answer: "love",
        regex: /love/
    },
    {
        question: "Type in the English translation...",
        word: "радость",
        answer: "happiness",
        regex: /happiness/
    },
    {
        question: "Type in the English translation...",
        word: "кошка",
        answer: "cat",
        regex: /cat/
    },
    {
        question: "Type in the English translation...",
        word: "собака",
        answer: "dog",
        regex: /dog/
    },
    {
        question: "Type in the English translation...",
        word: "улыбаться",
        answer: "smile",
        regex: /smile/
    },
    {
        question: "Type in the English translation...",
        word: "россиянин",
        answer: "russian",
        regex: /russian/
    },
    {
        question: "Type in the English translation...",
        word: "Да",
        answer: "yes",
        regex: /yes|yeah|ya/
    },
    {
        question: "Type in the English translation...",
        word: "Спасибо",
        answer: "thank you",
        regex: /thank you|thanks/
    },
    {
        question: "Type in the English translation...",
        word: "До свидания",
        answer: "goodbye",
        regex: /goodbye|bye/
    },
    {
        question: "Type in the English translation...",
        word: "Доброе утро",
        answer: "good morning",
        regex: /good morning/
    },
    {
        question: "Type in the English translation...",
        word: "жена",
        answer: "wife",
        regex: /wife/
    },
    {
        question: "Type in the English translation...",
        word: "писать",
        answer: "to write",
        regex: /(to)?\W*write/
    },
    {
        question: "Type in the English translation...",
        word: "мысль",
        answer: "thought, idea",
        regex: /thought|idea/
    },
    {
        question: "Type in the English translation...",
        word: "тело",
        answer: "body",
        regex: /body/
    },
    {
        question: "Type in the English translation...",
        word: "читать",
        answer: "to read",
        regex: /(to)?\W*read/
    },
    {
        question: "Type in the English translation...",
        word: "девушка",
        answer: "girl",
        regex: /girl/
    },
    {
        question: "Type in the English translation...",
        word: "школа",
        answer: "school",
        regex: /school/
    },
    {
        question: "Type in the English translation...",
        word: "тихо",
        answer: "quietly, softly",
        regex: /quiet(ly)?|soft(ly)?/
    },
    {
        question: "Type in the English translation...",
        word: "скорый",
        answer: "quick, fast",
        regex: /quick|fast/
    },
    {
        question: "Type in the English translation...",
        word: "дождь",
        answer: "rain",
        regex: /rain/
    },
    {
        question: "Type in the English translation...",
        word: "поле",
        answer: "field",
        regex: /field/
    },
    {
        question: "Type in the English translation...",
        word: "музыка",
        answer: "music",
        regex: /music/
    },
    {
        question: "Type in the English translation...",
        word: "учиться",
        answer: "to study",
        regex: /(to)?\W*study/
    },
    {
        question: "Type in the English translation...",
        word: "плохо",
        answer: "bad, badly",
        regex: /bad|badly/
    },
    {
        question: "Type in the English translation...",
        word: "пить",
        answer: "to drink",
        regex: /(to)?\W*drink/
    },
    {
        question: "Type in the English translation...",
        word: "страсть",
        answer: "passion",
        regex: /passion/
    },
    {
        question: "Type in the English translation...",
        word: "куча",
        answer: "a pile, a heap",
        regex: /(a)?\W*pile|(a)? heap/
    },
    {
        question: "Type in the English translation...",
        word: "сомневаться",
        answer: "to doubt",
        regex: /(to)?\W*doubt/
    },
    {
        question: "Type in the English translation...",
        word: "друг",
        answer: "friend",
        regex: /friend/
    }

];
