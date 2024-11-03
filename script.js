const questions = [
    {
        question: "מהו תפקידו של ארגון מד"א בישראל?",
        answers: [
            { text: "הצלת חיים ומתן מענה רפואי ראשוני", correct: true },
            { text: "שירותי פינוי ואמבולנסים בלבד", correct: false },
            { text: "אספקת ציוד רפואי לבתי חולים", correct: false }
        ],
        explanation: "מגן דוד אדום הוא ארגון ה-EMS הלאומי של ישראל, שמטרתו לתת מענה רפואי ראשוני ולהציל חיים בזירת האירוע."
    },
    // שאלות נוספות כאן...
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById("next-button").addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            alert("סיימת את החידון! כל הכבוד!");
            currentQuestionIndex = 0;
            showQuestion(questions[currentQuestionIndex]);
        }
    });
});

function showQuestion(question) {
    document.getElementById("question").innerText = question.question;
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
    document.getElementById("explanation").classList.add("hidden");
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    document.getElementById("explanation-text").innerText = questions[currentQuestionIndex].explanation;
    document.getElementById("explanation").classList.remove("hidden");
}
