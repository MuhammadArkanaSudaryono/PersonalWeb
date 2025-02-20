document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');

    function setActiveSection(sectionId) {
        // Update navigation buttons
        navButtons.forEach(button => {
            if (button.dataset.section === sectionId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Update sections
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            setActiveSection(sectionId);
        });
    });
});