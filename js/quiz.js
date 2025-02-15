const quizManager = {
    currentQuestion: 0,
    questions: [], // Sera rempli avec les 100 questions
    answeredQuestions: new Set(),

    init() {
        // S'assurer que le conteneur de quiz est visible
        const quizSection = document.getElementById('quiz');
        if (quizSection) {
            quizSection.classList.add('active');
        }

        // Charger les questions
        this.questions = questionBank.allQuestions;
        
        // Mettre en place les écouteurs d'événements
        this.setupEventListeners();
        
        // Afficher la première question
        this.displayQuestion(0);

        // Ajouter les écouteurs pour la sélection des réponses
        document.querySelector('.answers').addEventListener('click', (e) => {
            if (e.target.classList.contains('answer-btn')) {
                // Retirer la sélection précédente
                document.querySelectorAll('.answer-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
                // Ajouter la sélection à la réponse cliquée
                e.target.classList.add('selected');
            }
        });
    },

    setupEventListeners() {
        const validateBtn = document.querySelector('.validate-btn');
        const jumpBtn = document.querySelector('#jumpToQuestion');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        validateBtn.addEventListener('click', () => this.validateAnswer());
        
        jumpBtn.addEventListener('click', () => {
            const input = document.querySelector('#questionJump');
            const questionNum = parseInt(input.value) - 1;
            if (questionNum >= 0 && questionNum < this.questions.length) {
                this.displayQuestion(questionNum);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (this.currentQuestion > 0) {
                this.displayQuestion(this.currentQuestion - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.displayQuestion(this.currentQuestion + 1);
            }
        });
    },

    displayQuestion(index) {
        this.currentQuestion = index;
        const question = this.questions[index];
        
        // Mettre à jour le numéro de la question
        const questionNumber = document.querySelector('.question-number');
        if (questionNumber) {
            questionNumber.textContent = `Question ${index + 1}/${this.questions.length}`;
        }
        
        // Mettre à jour la question
        const questionElement = document.querySelector('.question');
        if (questionElement) {
            questionElement.textContent = question.question;
        }
        
        // Mettre à jour les réponses
        const answersContainer = document.querySelector('.answers');
        if (answersContainer) {
            answersContainer.innerHTML = '';
            question.answers.forEach((answer, i) => {
                const button = document.createElement('button');
                button.className = 'answer-btn';
                button.textContent = answer.text;
                button.dataset.index = i;
                answersContainer.appendChild(button);
            });
        }

        // Réinitialiser l'explication
        const explanation = document.querySelector('.explanation');
        if (explanation) {
            explanation.classList.add('hidden');
            explanation.textContent = '';
        }

        // Mettre à jour les boutons de navigation
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === this.questions.length - 1;

        // Indiquer si la question a déjà été répondue
        const questionCard = document.querySelector('.question-card');
        if (questionCard) {
            if (this.answeredQuestions.has(index)) {
                questionCard.classList.add('answered');
            } else {
                questionCard.classList.remove('answered');
            }
        }
    },

    validateAnswer() {
        const selectedAnswer = document.querySelector('.answer-btn.selected');
        if (!selectedAnswer) {
            alert('Veuillez sélectionner une réponse');
            return;
        }

        const question = this.questions[this.currentQuestion];
        const answerIndex = parseInt(selectedAnswer.dataset.index);
        const isCorrect = question.answers[answerIndex].correct;

        this.answeredQuestions.add(this.currentQuestion);

        const explanation = document.querySelector('.explanation');
        explanation.classList.remove('hidden');
        
        if (isCorrect) {
            selectedAnswer.classList.add('correct');
            explanation.innerHTML = `<div class="correct-message">Correct ! ${question.explanation}</div>`;
        } else {
            selectedAnswer.classList.add('wrong');
            const correctAnswer = question.answers.find(a => a.correct).text;
            explanation.innerHTML = `<div class="wrong-message">Incorrect. La bonne réponse était : "${correctAnswer}"<br>${question.explanation}</div>`;
        }
    }
};

// Initialiser le quiz quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    quizManager.init();
}); 