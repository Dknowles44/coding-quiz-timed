var startPage = document.querySelector(".start-quiz")
var quizQuestions = document.querySelector(".test-questions")
var questionsTitle = document.querySelector(".questions");
var answers = document.querySelector(".answer");
var startButton = document.getElementById("initiate-quiz");
var questionNmbr = 0;
// Start Quiz
var startQuiz = function () {
    startPage.classList.add("hide");
    quizQuestions.classList.remove("hide");
    nextQuestion();
};

// show questions
var questionsShow = function (question) {
    questionsTitle.innerHTML = "<h1>" + question.question + "</h1>";
    var hlEL = document.createElement("ul");
    for (var i = 0; i < question.options.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = i + 1 + ". " + question.options[i];
        liEl.setAttribute("class", "answers");
        liEl.setAttribute("value", question.options[i]);
        liEl.addEventListener("click", function (e) { 
            selectedAnswer(e, question.answer);
        });
        hlEL.appendChild(liEl);
        answers.appendChild(hlEL);
    }
};

// show next question

var nextQuestion = function () {
    resetEl();
    showQuestion(questions[questionNmbr]);
    questionNmbr++;
};

// Questions Array
const questions = [
    {
        question: "What does the acronym DOM stand for ?",
        answer: "Document Object Model",
        options: ["Documents Obviously Mine", "Don't Over Mine", "Documents Optional Man", "Document Object Model"],
    },
    {
        question: "What does API stand for ?",
        answer: "Application Programming Interface",
        options: ["Application Programming Interface", "Appliances Prepare Ingrediants", "Application Properly Intact", "Apple Pin Integar"],
    },
    {
        question: "What is a callback function ?",
        answer: "Passing a function into another function",
        options: ["Adding the element into another element", "Passing a function into another function", "Giving an element a phone number and calling it back later", "returning the text content of an element"],
    },
    {
        question: "What is a DOM method ?",
        answer: "DOM methods are the actions that you can perform on the objects of DOM",
        options: ["DOM methods are when you pass a function into another function", "DOM methods are the actions that you can perform on the objects of DOM", "DOM methods are contagious", "DOM methods are used to traverse your bathroom" ],
    },
    {
        question: "Which of these methods will return a interger ?",
        answer: "parseInt()",
        options: ["return()", "getAttribute", "parseInt()", "test()"],
    },
];

//Start button
startPage.addEventListener("click", startQuiz);
console.log(startPage);