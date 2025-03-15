document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const invitation = document.getElementById('invitation');
    const openButton = document.getElementById('openInvitation');

    openButton.addEventListener('click', () => {
        // Fade out welcome screen
        welcomeScreen.style.transition = 'opacity 1s ease-out';
        welcomeScreen.style.opacity = '0';

        setTimeout(() => {
            // Hide welcome screen
            welcomeScreen.style.display = 'none';
            
            // Show invitation with fade in animation
            invitation.classList.remove('hidden');
            invitation.classList.add('fade-in');
        }, 1000);
    });
});