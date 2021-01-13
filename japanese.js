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
        word: "寿司",
        answer: "sushi",
        regex: /sushi/
    },
    {
        question: "Type in the English translation...",
        word: "ごめんなさい",
        answer: "sorry",
        regex: /sorry/
    },
    {
        question: "Type in the English translation...",
        word: "こんにちは",
        answer: "hello",
        regex: /hello|hi|hey|good afternoon/
    },
    {
        question: "Type in the English translation...",
        word: "おやすみなさい",
        answer: "good night",
        regex: /good night/
    },
    {
        question: "Type in the English translation...",
        word: "お母さん",
        answer: "mother",
        regex: /mother/
    },
    {
        question: "Type in the English translation...",
        word: "六",
        answer: "five",
        regex: /five/
    },
    {
        question: "Type in the English translation...",
        word: "十一月",
        answer: "november",
        regex: /november/
    },
    {
        question: "Type in the English translation...",
        word: "暖かい",
        answer: "warm",
        regex: /warm/
    },
    {
        question: "Type in the English translation...",
        word: "塩っぱい",
        answer: "salty",
        regex: /salty/
    },
    {
        question: "Type in the English translation...",
        word: "走る",
        answer: "to run",
        regex: /(to)?\W*run/
    },
    {
        question: "Type in the English translation...",
        word: "話す",
        answer: "to talk/speak",
        regex: /(to)?\W*talk|(to)?\W*speak/
    },
    {
        question: "Type in the English translation...",
        word: "ご飯",
        answer: "rice/meal",
        regex: /rice|meal/
    },
    {
        question: "Type in the English translation...",
        word: "魚",
        answer: "fish",
        regex: /fish/
    },
    {
        question: "Type in the English translation...",
        word: "親切",
        answer: "kind, kindhearted",
        regex: /kind|kindhearted/
    },
    {
        question: "Type in the English translation...",
        word: "休日",
        answer: "day off, holiday",
        regex: /holiday|day off/
    },
    {
        question: "Type in the English translation...",
        word: "思い出",
        answer: "memory",
        regex: /memory/
    },
    {
        question: "Type in the English translation...",
        word: "赤ちゃん",
        answer: "baby",
        regex: /baby/
    },
    {
        question: "Type in the English translation...",
        word: "おもちゃ",
        answer: "toy",
        regex: /toy|play thing/
    },
    {
        question: "Type in the English translation...",
        word: "伝言",
        answer: "message",
        regex: /message/
    },
    {
        question: "Type in the English translation...",
        word: "泳ぐ",
        answer: "swim",
        regex: /swim/
    },
    {
        question: "Type in the English translation...",
        word: "趣味",
        answer: "hobby, interest",
        regex: /hobby|interest/
    },
    {
        question: "Type in the English translation...",
        word: "幸せ",
        answer: "happiness, satisfied",
        regex: /happy|happiness|satisfied/
    },
    {
        question: "Type in the English translation...",
        word: "医者",
        answer: "doctor",
        regex: /doctor/
    },
    {
        question: "Type in the English translation...",
        word: "重さ",
        answer: "weight",
        regex: /weight/
    },
    {
        question: "Type in the English translation...",
        word: "断る",
        answer: "refuse, turn down",
        regex: /refuse|turn down/
    },
    {
        question: "Type in the English translation...",
        word: "絵",
        answer: "picture, painting",
        regex: /picture|painting/
    },
    {
        question: "Type in the English translation...",
        word: "スキー",
        answer: "ski, skiing",
        regex: /ski(ing)?/
    },
    {
        question: "Type in the English translation...",
        word: "氷",
        answer: "ice",
        regex: /ice/
    },
    {
        question: "Type in the English translation...",
        word: "蹴る",
        answer: "kick",
        regex: /(to)?\W*kick/
    },
    {
        question: "Type in the English translation...",
        word: "咲く",
        answer: "bloom, blossom",
        regex: /bloom|blossom/
    }

];
