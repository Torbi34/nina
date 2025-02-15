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

// Animation de la lettre d'amour
document.querySelector('.heart').addEventListener('click', function() {
    const letter = document.querySelector('.love-letter');
    if (!letter.classList.contains('show')) {
        letter.classList.add('show');
    } else {
        letter.classList.add('hide');
        setTimeout(() => {
            letter.classList.remove('show', 'hide');
        }, 500);
    }
});

// Galerie Photos
function openGallery() {
    const modal = document.querySelector('.gallery-modal');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Générer la grille de photos (à personnaliser avec vos photos)
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = ''; // Nettoyer la grille existante
    
    // Exemple avec 12 photos
    for (let i = 1; i <= 12; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <div class="placeholder">Photo ${i}</div>
            <img src="nina/image${i}.png" alt="">
        `;
        galleryGrid.appendChild(item);
    }
}

// Fermer la galerie
document.querySelector('.close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.gallery-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
});

// Fermer la galerie si on clique en dehors
document.querySelector('.gallery-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-modal')) {
        document.querySelector('.close-modal').click();
    }
});

// Navigation dans la galerie (à implémenter selon vos besoins)
document.querySelector('.prev-btn').addEventListener('click', () => {
    // Navigation vers la photo précédente
});

document.querySelector('.next-btn').addEventListener('click', () => {
    // Navigation vers la photo suivante
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
}); 