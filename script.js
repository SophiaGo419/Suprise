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
            <img src="madcute.gif" alt="Cute Angry Cat">
            <p class="pout-text">😾 Okay… now I'm a little mad! But still cute!</p>
        `;
    } else if (poutyNoClickCount === 3) {
        // Third NO click → Dramatic pouty cat + NO flies away
        poutyCatContainer.innerHTML = `
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnBocDdsdjB1ZTdsc3lzeDFhdDU4dDRxODlwZjR1OXpiaG1zMXphMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zZbf6UpZslp3nvFjIR/giphy.gif" alt="Dramatic Pouty Cat">
            <p class="pout-text"> This is my last attempt… please… 🥺</p>
            <p class="pout-text"> I kicked the No away 😝 HAHAHAHA </p>
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
// Select all flip cards in the pictures page
document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('#pictures .flip-card');
    let flippedCount = 0;
    const picturesHeartContainer = document.querySelector('.pictures-heart-container');

    // Love message
    const picturesContainer = document.querySelector('#pictures .container');
    const loveMessage = document.createElement('div');
    loveMessage.textContent = 'I Love You So MUCH ❤️!';
    loveMessage.style.position = 'fixed';
    loveMessage.style.top = '50%';
    loveMessage.style.left = '50%';
    loveMessage.style.transform = 'translate(-50%, -50%)';
    loveMessage.style.fontSize = '3rem';
    loveMessage.style.fontWeight = 'bold';
    loveMessage.style.color = '#ff2d95';
    loveMessage.style.textShadow = '0 0 20px #ffb6b9, 0 0 30px #ff6b81';
    loveMessage.style.zIndex = '10000';
    loveMessage.style.opacity = '0';
    loveMessage.style.transition = 'opacity 0.3s ease';
    picturesContainer.appendChild(loveMessage);

    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped')) {
                card.classList.add('flipped');
                flippedCount++;
                if (flippedCount === flipCards.length) {
                    showLoveMessage();
                }
            }
        });
    });

    function showLoveMessage() {
        loveMessage.style.opacity = '1';
        launchGrandHeartsFromMessage(200); // explode from message

        setTimeout(() => {
            loveMessage.style.opacity = '0';
        }, 3000);
    }

    function launchGrandHeartsFromMessage(count) {
        const rect = loveMessage.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = `${originX}px`;
            heart.style.top = `${originY}px`;
            heart.style.fontSize = `${10 + Math.random() * 25}px`;

            picturesHeartContainer.appendChild(heart);

            // Random velocities
            const velocityX = (Math.random() - 0.5) * 10;
            const velocityY = - (5 + Math.random() * 10);
            const rotation = Math.random() * 360;
            const rotationSpeed = (Math.random() - 0.5) * 20;

            let x = 0, y = 0, r = rotation, opacity = 1;

            const animate = () => {
                x += velocityX;
                y += velocityY;
                r += rotationSpeed;
                opacity -= 0.02;

                heart.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
                heart.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    heart.remove();
                }
            };

            requestAnimationFrame(animate);
        }
    }
});

// Function to show message with floating hearts
function showLoveMessage() {
    loveMessage.style.opacity = '1';
    createHearts();

    // Hide after 3 seconds
    setTimeout(() => {
        loveMessage.style.opacity = '0';
    }, 3000);
}

// Function to create floating hearts
function createHearts() {
    const heartContainer = document.querySelector('.heart-container') || createHeartContainer();

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = `${20 + Math.random() * 20}px`;
        heart.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        heart.style.setProperty('--y', `${- (50 + Math.random() * 300)}px`);

        heartContainer.appendChild(heart);

        // Remove heart after animation
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Ensure heart container exists
function createHeartContainer() {
    const container = document.createElement('div');
    container.className = 'heart-container';
    document.body.appendChild(container);
    return container;
}

// Create confetti hearts
const heartContainer = document.querySelector('.heart-container');

// Function to create a single floating heart
function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = '❤️'; // only one heart emoji

    // Random start position anywhere on screen
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    heart.style.left = startX + 'px';
    heart.style.top = startY + 'px';

    // Random floating distance
    heart.style.setProperty('--x', (Math.random() * 400 - 200) + 'px'); // left/right movement
    heart.style.setProperty('--y', -(Math.random() * 400 + 200) + 'px'); // upward movement

    // Random size & **faster duration**
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's'; // shorter duration = faster float

    heartContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => heart.remove(), 4000); // matches faster duration
}

// Continuously create hearts one by one
setInterval(createHeart, 500); // slightly faster creation rate

document.addEventListener('DOMContentLoaded', () => {
  const scrollButtons = document.querySelectorAll('.scrollBtn');

  scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling;
      if (description) {
        description.style.display = 'block'; // show description
        button.style.display = 'none'; // hide the arrow button
      }
    });
  });
});