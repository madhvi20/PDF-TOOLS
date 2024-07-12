// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Functionality for the "Try Now" buttons in the features section
const featureButtons = document.querySelectorAll('.feature .btn');
featureButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('This feature is not available yet. Stay tuned for updates!');
    });
});
