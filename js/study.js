document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.study-section');

    // Cacher TOUTES les sections au démarrage
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher uniquement l'introduction
    const introSection = document.getElementById('introduction');
    if (introSection) {
        introSection.classList.add('active');
    }

    // Marquer le lien Introduction comme actif
    const introLink = document.querySelector('[data-section="introduction"]');
    if (introLink) {
        introLink.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            const sectionId = link.dataset.section;
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
                if (sectionId === 'quiz' && typeof quizManager !== 'undefined') {
                    quizManager.init();
                }
            }
        });
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.study-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Quiz
    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            answerBtns.forEach(b => b.classList.remove('correct', 'wrong'));
            
            // Exemple de logique de quiz (à personnaliser)
            if (this.textContent === "Je m'arrête") {
                this.classList.add('correct');
            } else {
                this.classList.add('wrong');
            }
        });
    });

    // Animation de l'intersection améliorée
    const demoBtn = document.querySelector('.demo-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            const demo = document.querySelector('.intersection-demo');
            // Réinitialiser l'animation
            demo.innerHTML = `
                <div class="road-horizontal"></div>
                <div class="road-vertical"></div>
                <div class="car car-red"></div>
                <div class="car car-blue"></div>
            `;
            
            const redCar = demo.querySelector('.car-red');
            const blueCar = demo.querySelector('.car-blue');
            
            // Animation synchronisée
            redCar.style.animation = 'carMoveRightWithStop 6s linear';
            blueCar.style.animation = 'carMoveUp 4s linear';

            // Ajouter une classe pour le clignotant quand la voiture rouge s'arrête
            setTimeout(() => {
                redCar.classList.add('stopping');
            }, 2000);

            // Retirer la classe après que la voiture bleue soit passée
            setTimeout(() => {
                redCar.classList.remove('stopping');
            }, 4000);
        });
    }

    // Initialiser le quiz uniquement si on clique sur la section quiz
    if (document.querySelector('#quiz.active') && typeof quizManager !== 'undefined') {
        quizManager.init();
    }

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    // Afficher le bouton menu uniquement sur mobile
    if (window.innerWidth <= 480) {
        mobileMenuBtn.style.display = 'block';
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 480) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            sidebar.classList.remove('active');
        }
    });

    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Fermer le menu si on clique sur le contenu
    content.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
}); 