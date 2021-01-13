
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

// KOREAN VOCAB DATA

questions = [
    {
        question: "Type in the English translation...",
        word: "주",
        answer: "week",
        regex: /week/
    },
    {
        question: "Type in the English translation...",
        word: "년",
        answer: "year",
        regex: /year/
    },
    {
        question: "Type in the English translation...",
        word: "웃다",
        answer: "laugh",
        regex: /laugh/
    },
    {
        question: "Type in the English translation...",
        word: "아름다운",
        answer: "beautiful",
        regex: /beautiful/
    },
    {
        question: "Type in the English translation...",
        word: "안녕",
        answer: "hello",
        regex: /hello|hey|hi/
    },
    {
        question: "Type in the English translation...",
        word: "좋은 아침이에요",
        answer: "good morning",
        regex: /good morning/
    },
    {
        question: "Type in the English translation...",
        word: "안녕히 주무세요",
        answer: "good night",
        regex: /good night/
    },
    {
        question: "Type in the English translation...",
        word: "고마워요",
        answer: "thank you",
        regex: /thank you|thanks/
    },
    {
        question: "Type in the English translation...",
        word: "커피",
        answer: "coffee",
        regex: /coffee/
    },
    {
        question: "Type in the English translation...",
        word: "차",
        answer: "tea",
        regex: /tea/
    },
    {
        question: "Type in the English translation...",
        word: "닭고기",
        answer: "chicken",
        regex: /chicken/
    },
    {
        question: "Type in the English translation...",
        word: "몸",
        answer: "body",
        regex: /body/
    },
    {
        question: "Type in the English translation...",
        word: "직원",
        answer: "employee",
        regex: /employee/
    },
    {
        question: "Type in the English translation...",
        word: "의사",
        answer: "doctor",
        regex: /doctor/
    },
    {
        question: "Type in the English translation...",
        word: "돼지고기",
        answer: "pork",
        regex: /pork/
    },
    {
        question: "Type in the English translation...",
        word: "가족",
        answer: "family",
        regex: /family/
    },
    {
        question: "Type in the English translation...",
        word: "어머니",
        answer: "mother",
        regex: /mother|mom|mama/
    },
    {
        question: "Type in the English translation...",
        word: "새로운",
        answer: "new",
        regex: /new/
    },
    {
        question: "Type in the English translation...",
        word: "자다",
        answer: "sleep",
        regex: /sleep/
    },
    {
        question: "Type in the English translation...",
        word: "파란색",
        answer: "blue",
        regex: /blue/
    },
    {
        question: "Type in the English translation...",
        word: "야채",
        answer: "vegetables",
        regex: /vegetable(s)?/
    },
    {
        question: "Type in the English translation...",
        word: "밥",
        answer: "rice",
        regex: /rice/
    },
    {
        question: "Type in the English translation...",
        word: "가족",
        answer: "family",
        regex: /family/
    },
    {
        question: "Type in the English translation...",
        word: "남편",
        answer: "husband",
        regex: /husband/
    },
    {
        question: "Type in the English translation...",
        word: "나라",
        answer: "country",
        regex: /country/
    },
    {
        question: "Type in the English translation...",
        word: "직업",
        answer: "job",
        regex: /job/
    },
    {
        question: "Type in the English translation...",
        word: "시간",
        answer: "time",
        regex: /time/
    },
    {
        question: "Type in the English translation...",
        word: "내일",
        answer: "tomorrow",
        regex: /tomorrow/
    },
    {
        question: "Type in the English translation...",
        word: "먹다",
        answer: "to eat",
        regex: /(to)?\W*eat/
    },
    {
        question: "Type in the English translation...",
        word: "웃다",
        answer: "to laugh",
        regex: /(to)?\W*laugh/
    }
];
