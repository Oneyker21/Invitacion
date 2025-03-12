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
            
            // Show invitation
            invitation.classList.remove('hidden');
            invitation.classList.add('fade-in');
            
            // Add slide-in animation to details
            const details = invitation.querySelectorAll('.detail-item');
            details.forEach((detail, index) => {
                detail.style.opacity = '0';
                setTimeout(() => {
                    detail.classList.add('slide-in');
                    detail.style.opacity = '1';
                }, index * 200); // Stagger the animations
            });
        }, 1000);
    });
});