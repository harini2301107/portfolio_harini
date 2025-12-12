document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // --- Navigation Logic ---
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Highlight active link on scroll
    const sections = document.querySelectorAll('.section, .hero-dark');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjust offset for sticky header
            if (window.scrollY >= sectionTop - 80) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active-link');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active-link');
            }
        });
    });
    
    // --- Project Modal Logic ---

    // Project Data Structure with Detailed Information
    const projectData = {
        'neuroprompt': {
            title: 'NeuroPrompt - Inclusive Learning Tool',
            summary: 'An advanced AI-assisted learning platform designed to adapt educational content and guidance specifically for individuals with diverse cognitive profiles. This project focuses on accessibility and personalized learning paths.',
            details: [
                'Goal: To leverage computational approaches to make education more equitable and effective for all learners.',
                'Key Feature: Adaptive content generation based on user performance, ensuring personalized pace and difficulty.',
                'Technology Focus: Utilizes basic AI/Machine Learning concepts and algorithms for profiling and content delivery.',
                'Implementation Stack: Core logic in Python for AI modeling, potential use of HTML/CSS/JavaScript for the web interface.',
                'Status: Ongoing development, showcasing research and application of computer science principles to educational technology.'
            ]
        },
        'ap-calc': {
            title: 'Student Portfolio Activity Point Calculation System',
            summary: 'A robust software application designed to automate the process of calculating student Activity Points (AP) based on complex university and regulatory rules.',
            details: [
                'Problem Solved: Automated the manual, error-prone process of calculating student activity points, saving significant administrative time.',
                'Functionality: Automates data intake, cross-references activity types with point scales, and generates accurate, instant results.',
                'Implementation: Focused on data structure integrity, efficient algorithm application, and clean user input/output interfaces.',
                'Technical Skills Applied:Data validation, conditional logic programming (C/C++ or Python), and UI principles (using HTML/CSS/JavaScript for presentation, if web-based).',
            ]
        },
        // --- Senthuron Cafe Webpage (FRONTEND FOCUS) ---
        'senthuron-cafe': {
            title: 'Senthuron Cafe Webpage',
            summary: 'Designed a modern, visually appealing webpage for Senthuron Cafe to showcase branding, menu, and contact info. Built using HTML, CSS, and JavaScript.',
            details: [
                'Front-end Focus: Executed full UI design and implementation, concentrating on aesthetics and user flow.',
                'Key Feature: Implemented responsive design principles (CSS Media Queries) ensuring a consistent experience across desktop and mobile devices.',
                'Technology Used: Demonstrates strong proficiency in HTML structure, advanced CSS layout techniques (Flexbox/Grid), and basic JavaScript interactivity.',
                'Outcome:A professional, ready-to-deploy static website demonstrating keen front-end design and UX skills.'
            ]
        },
        // --- Environment Friendly Goods (FRONTEND FOCUS) ---
        'eco-goods': {
            title: 'Environment Friendly Goods Landing Page',
            summary: 'Created a conversion-focused landing page for a small online retailer promoting eco-friendly products. Built using HTML, CSS, and JavaScript.',
            details: [
                'Front-end Focus: Designed for maximum visual impact and clear Call-to-Action (CTA) placement to drive user conversion.',
                'key Feature: Optimized page performance and structure for fast loading times and accessibility.',
                'Technology Used: Practical application of modern HTML, detailed CSS styling, and JavaScript for client-side interactions.',
                'Outcome: A polished, sales-oriented web page demonstrating focused front-end development and conversion-focused design.'
            ]
        }
    };

    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalExtraDetails = document.getElementById("modal-extra-details");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project-id');
            const data = projectData[projectId];

            if (data) {
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.summary;
                
                modalExtraDetails.innerHTML = '';
                data.details.forEach(detail => {
                    const p = document.createElement('p');
                    p.classList.add('detail-point');
                    p.innerHTML = detail; 
                    modalExtraDetails.appendChild(p);
                });

                modal.style.display = "block";
            }
        });
    });

    // Close modal functions
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // --- CONTACT FORM LOGIC ---
    const showContactFormBtn = document.getElementById('showContactFormBtn');
    const contactFormContainer = document.getElementById('contactFormContainer');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // 1. Show the form when "Initiate Contact" is pressed
    showContactFormBtn.addEventListener('click', function() {
        contactFormContainer.style.display = 'block';
        showContactFormBtn.style.display = 'none'; // Hide the button
        successMessage.style.display = 'none'; // Ensure success message is hidden if it was previously shown
    });

    // 2. Handle form submission (Simulated)
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the form from actually submitting/reloading

        // Simulation of successful message sending
        
        // Hide the form
        contactFormContainer.style.display = 'none';
        
        // Show the success message
        successMessage.style.display = 'block';
        
        // Clear the form fields
        contactForm.reset();

        // Hide the success message and show the Initiate button again after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            showContactFormBtn.style.display = 'block'; 
        }, 5000); 
    });
});