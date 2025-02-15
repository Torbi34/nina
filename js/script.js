// Animation des cœurs flottants
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const hearts = ['❤️', '💝', '💖', '💗'];
    
    setInterval(() => {
        const heart = document.createElement('span');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

// Animation du cadeau
document.querySelector('.gift-button').addEventListener('click', function() {
    this.style.transform = 'scale(0)';
    setTimeout(() => {
        this.style.display = 'none';
        const message = document.querySelector('.surprise-message');
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('show');
        }, 100);
    }, 300);
});

// Message du cœur
document.querySelector('.heart').addEventListener('click', function() {
    const message = document.querySelector('.hidden-message');
    message.style.display = message.style.display === 'none' ? 'block' : 'none';
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
}); 