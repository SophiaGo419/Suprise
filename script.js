// Page navigation
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// NO button evasion
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * 70 + 10; // random X%
    const y = Math.random() * 70 + 10; // random Y%
    noBtn.style.position = 'absolute';
    noBtn.style.top = y + '%';
    noBtn.style.left = x + '%';
});

// YES button celebration
document.getElementById('yesBtn').addEventListener('click', () => {
    goToPage('celebration');
});

// NO button click leads to pouty page
noBtn.addEventListener('click', () => {
    goToPage('pouty');
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