document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Machine Learning Model", description: "A machine learning model for predicting outcomes based on historical data.", link: "#" },
        { title: "Portfolio Website", description: "A dynamic portfolio website showcasing my skills and projects.", link: "#" }
    ];

    const blogPosts = [
        { title: "Understanding Machine Learning", summary: "A brief overview of what machine learning is and its applications.", link: "#" },
        { title: "The Future of Mechanical Engineering", summary: "Exploring how machine learning is transforming mechanical engineering.", link: "#" }
    ];

    // Populate projects section
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h4><a href="${project.link}">${project.title}</a></h4>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });

    // Populate blog section
    const blogContainer = document.getElementById('blog-container');
    blogPosts.forEach(post => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog-post');
        blogElement.innerHTML = `
            <h4><a href="${post.link}">${post.title}</a></h4>
            <p>${post.summary}</p>
        `;
        blogContainer.appendChild(blogElement);
    });

    // Scroll animation for sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 150) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call to show sections in view

    // Form submission
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        formResponse.textContent = 'Thank you for your message. I will get back to you soon!';
        contactForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const headerHeight = document.querySelector('header').offsetHeight;

    // Scroll to section with header offset
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        const offsetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    // Attach event listeners to nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    // Other existing code (projects, blog population, etc.)

    // Scroll animation for sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 150) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call to show sections in view

    // Form submission
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        formResponse.textContent = 'Thank you for your message. I will get back to you soon!';
        contactForm.reset();
    });
});
