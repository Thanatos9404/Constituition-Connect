// Sample Questions Array (replace with 200 questions)
const questions = [
    // Add 200 questions here
];

let currentQuestion = {};
let currentIndex = 0;
let score = 0;
let askedQuestions = [];
let leaderboard = [];

// Load Random Questions
function selectQuestions() {
    while (askedQuestions.length < 10 && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        if (!askedQuestions.includes(question)) {
            askedQuestions.push(question);
        }
    }
}

// Display Random Question
function loadQuestion() {
    if (askedQuestions.length === 0) {
        document.getElementById('question').textContent = 'Quiz Over!';
        document.getElementById('result').textContent = `Your final score is ${score}`;
        updateLeaderboard();
        return;
    }
    
    currentQuestion = askedQuestions[Math.floor(Math.random() * askedQuestions.length)];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('optionA').textContent = currentQuestion.options.A;
    document.getElementById('optionB').textContent = currentQuestion.options.B;
    document.getElementById('optionC').textContent = currentQuestion.options.C;
    document.getElementById('optionD').textContent = currentQuestion.options.D;

    document.getElementById('result').textContent = '';
    document.getElementById('next').disabled = true;
    askedQuestions = askedQuestions.filter(q => q !== currentQuestion);
}

// Check Answer
function checkAnswer(option) {
    if (option === currentQuestion.correctOption) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Incorrect.';
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('next').disabled = false;
}

// Move to Next Question
function nextQuestion() {
    loadQuestion();
}

// Update Leaderboard
function updateLeaderboard() {
    leaderboard.push({ score });
    leaderboard.sort((a, b) => b.score - a.score);
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        leaderboardList.innerHTML += `<li>${index + 1}. Score: ${entry.score}</li>`;
    });
}

// Start the quiz
window.onload = function() {
    selectQuestions();
    loadQuestion();
};
