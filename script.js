// Page navigation
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}



// YES button celebration
document.getElementById('yesBtn').addEventListener('click', () => {
    goToPage('celebration');
});

// NO button click leads to pouty page
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', () => {
    goToPage('pouty');
});;

// Counter for second NO clicks
let poutyNoClickCount = 1; // Start at 1 since the first GIF is already shown

const poutyNoBtn = document.getElementById('poutyNoBtn');
const poutyYesBtn = document.getElementById('poutyYesBtn');
const poutyCatContainer = document.getElementById('poutyCatContainer');

poutyYesBtn.addEventListener('click', () => {
    goToPage('celebration');
});

poutyNoBtn.addEventListener('click', () => {
    poutyNoClickCount++;

    if (poutyNoClickCount === 2) {
        // Second NO click → Cute angry cat
        poutyCatContainer.innerHTML = `
            <img src="https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif" alt="Cute Angry Cat">
            <p class="pout-text">😾 Okay… now I'm a little mad! But still cute!</p>
        `;
    } else if (poutyNoClickCount === 3) {
        // Third NO click → Dramatic pouty cat + NO flies away
        poutyCatContainer.innerHTML = `
            <img src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif" alt="Dramatic Pouty Cat">
            <p class="pout-text">😭 This is my last attempt… I’m heartbroken!</p>
        `;

        // Fly away NO button
        setTimeout(() => {
            poutyNoBtn.style.animation = 'flyAway 1s forwards';
            poutyNoBtn.style.pointerEvents = 'none';
        }, 500);
    }
});


// Page navigation
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Back to boxes page
function goBackToBoxes() {
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.add('slide-out');

    setTimeout(() => {
        currentPage.classList.remove('active', 'slide-out');
        const boxesPage = document.getElementById('boxes');
        boxesPage.classList.add('active', 'slide-in');

        setTimeout(() => {
            boxesPage.classList.remove('slide-in');
        }, 600);
    }, 600);
}

// Page navigation
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Back to boxes page
function goBackToBoxes() {
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.add('slide-out');

    setTimeout(() => {
        currentPage.classList.remove('active', 'slide-out');
        const boxesPage = document.getElementById('boxes');
        boxesPage.classList.add('active', 'slide-in');

        setTimeout(() => {
            boxesPage.classList.remove('slide-in');
        }, 600);
    }, 600);
}

// Envelope open animation
const envelope = document.getElementById('envelope');
if (envelope) {
  const letterContent = document.getElementById('letterContent');
  const openText = document.getElementById('openText');
  const envelopeContainer = document.getElementById('envelopeContainer');

  envelopeContainer.addEventListener('click', () => {
    // Animate flap
    envelope.querySelector('.flap').style.transform = 'rotateX(-180deg)';
    
    // Fade out envelope and text
    envelope.style.opacity = '0';
    openText.style.opacity = '0';

    // After fade, hide envelope completely and show letter
    setTimeout(() => {
      envelopeContainer.style.display = 'none';
      letterContent.style.display = 'block';
      // Animate letter opacity
      setTimeout(() => {
        letterContent.style.opacity = '1';
      }, 50);
    }, 1000); // matches flap/fade duration
  });
}

// Play video automatically with sound when navigating to video page
function playVideoOnPageLoad(pageId) {
    if (pageId === 'video') {
        const video = document.getElementById('surpriseVideo');
        if (video) {
            video.muted = false; // ensure sound is on
            video.play().catch(err => {
                // Some browsers may still block autoplay
                console.log('Autoplay failed:', err);
            });
        }
    }
}

// Hook into goToPage
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const page = document.getElementById(pageId);
    page.classList.add('active');

    // Trigger video autoplay with sound if it's the video page
    playVideoOnPageLoad(pageId);
}

// Flip each card individually on click
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});